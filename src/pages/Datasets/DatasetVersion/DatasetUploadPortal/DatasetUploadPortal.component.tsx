import Card from 'src/components/Card';
import Button from 'src/components/Button';
import React, { useRef, ChangeEvent } from 'react';
import { Container, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';
import CsvDisplay from './CsvDisplay';
import papaparse from 'papaparse';
import Text from 'src/components/Text';
import { uploadAndPublish } from './DatasetUploadPortal.utils';
import { validateFile } from './Validate';
import { useParams } from 'react-router-dom';
import { DefaultService } from 'src/client';
import {
  TDataFrameDataModel,
  TDataframeValidationState,
  TDataModel
} from './DatasetUploadPortal.types';
import Heading from 'src/components/Heading';

const DatasetUploadComponent: React.FC = () => {
  const [selectedFiles, setSelectedFile] = React.useState<FileList | null>(
    null
  );
  // State to keep track of the validation state of the dataframes
  const [validataionState, setValidationState] =
    React.useState<TDataframeValidationState>({});
  const [currentFile, setCurrentFile] = React.useState<File | null>(null);
  const [allFilesValidated, setAllFilesValidated] = React.useState(false);
  const [sample_csv_data, setSampleCsvData] = React.useState<Array<any>>([]);
  const [logs, setLogs] = React.useState<string>(
    'Wait.. Fetching data model..'
  );
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { version } = useParams() as { version: string };
  const [dataModel, setDataModel] = React.useState<TDataModel | null>(null);
  const [showUploadButton, setShowUploadButton] = React.useState(true);

  function handleButtonClick() {
    fileInputRef.current?.click();
  }
  React.useEffect(() => {
    previewFile();
  }, [currentFile]);

  React.useEffect(() => {
    validateFiles();
  }, [selectedFiles]);

  function addLogMessage(message: string) {
    setLogs((prev) => prev + '\n' + message);
  }

  // Function to fetch all the dataframes from the backend for the data federation
  async function fetchDataModel() {
    const datafederation = await DefaultService.getAllDataFederations();
    if (!datafederation?.data_federations?.[0].data_model_id) {
      setLogs('No data model found for the data federation.');
      return;
    }
    const datamodel = await DefaultService.getDataModelInfo(
      datafederation.data_federations[0].data_model_id
    );

    const data_model: TDataModel = {
      data_model_id: datamodel.id,
      data_model_name: datamodel.name,
      data_model_dataframes: []
    };

    const data_frame_validation_state: TDataframeValidationState = {};

    for (const dataframe_id of datamodel.data_model_dataframes) {
      const dataframe = await DefaultService.getDataModelDataframeInfo(
        dataframe_id
      );
      // Create a data frame data model object
      const data_frame_data_model: TDataFrameDataModel = {
        data_frame_name: dataframe.name,
        data_frame_data_model_id: dataframe.id,
        type: dataframe.name,
        list_series_data_model: []
      };

      // Fetch the data model series info
      const promises = dataframe.data_model_series.map(async (seriesId) => {
        const seriesInfo = await DefaultService.getDataModelSeriesInfo(
          seriesId
        );
        data_frame_data_model.list_series_data_model.push(
          seriesInfo.series_schema
        );
      });
      await Promise.all(promises);

      // Add the data frame data model object to the data model object
      data_model.data_model_dataframes.push(data_frame_data_model);

      // Assign the validation state for the data frame to be false
      data_frame_validation_state[dataframe_id] = false;
    }

    // Set the data model and the validation state
    setValidationState(data_frame_validation_state);

    // Set the data model
    setDataModel(data_model);

    // Add a log message
    setLogs('Data model fetched successfully.');
    setTimeout(() => {
      setLogs('');
    }, 1000);
  }

  React.useEffect(() => {
    fetchDataModel();
  }, []);

  function validateFiles() {
    if (selectedFiles && dataModel) {
      // Add to log message the name of all the dataframes that are missing
      const missingDataframes = dataModel.data_model_dataframes
        .filter(
          (dataframe) =>
            !Array.from(selectedFiles).some(
              (file) => file.name.split('.')[0] === dataframe.data_frame_name
            )
        )
        .map((dataframe) => dataframe.data_frame_name);
      if (missingDataframes.length > 0) {
        setLogs(
          'The following dataframes are missing: ' +
            missingDataframes +
            '. Kindly add all the dataframes together and try again.'
        );
        setAllFilesValidated(false);
        return;
      }
      for (let i = 0; i < selectedFiles.length; i++) {
        const dataframeDataModel = dataModel.data_model_dataframes.find(
          (dataframe) =>
            dataframe.data_frame_name === selectedFiles[i].name.split('.')[0]
        );
        if (!dataframeDataModel) {
          addLogMessage(
            'Dataframe ' +
              selectedFiles[i].name +
              ' is not present in the data model. Ignoring the file.'
          );
          continue;
        }
        // Validate the file
        validateFile(selectedFiles[i], dataframeDataModel, addLogMessage)
          .then((result) => {
            if (result === true) {
              addLogMessage(
                'Validation of file ' + selectedFiles[i].name + ' success!'
              );
            } else {
              addLogMessage(
                'Validation of file ' + selectedFiles[i].name + ' failed!'
              );
              setAllFilesValidated(false);
            }
          })
          .catch((error) => {
            addLogMessage(
              'Unexpected validation failure for ' +
                selectedFiles[i].name +
                error.toString()
            );
          });
      }
      setAllFilesValidated(true);
    }
  }

  function previewFile() {
    const csv_lines: Array<string> = [];
    let i = 0;
    currentFile
      ? papaparse.parse(currentFile, {
          header: false,
          preview: 10,
          step: function (results: { data: any }) {
            let csv_line = '';
            for (const key in results.data) {
              if (csv_line != '') {
                csv_line += ',';
              }
              csv_line += results.data[key];
            }
            csv_lines.push(csv_line);
            if (i == 9) {
              setSampleCsvData(csv_lines);
            }
            i++;
          }
        })
      : null;
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (files) {
      setSelectedFile(files);
      setCurrentFile(files[0]);
      previewFile();
    }
  }

  return (
    <Container
      style={{
        margin: '0rem',
        marginTop: '1rem',
        paddingLeft: '0px',
        paddingRight: '0px',
        minWidth: '100%'
      }}
    >
      <Card primaryText="Upload dataset">
        <>
          <h2 style={{ margin: '1rem' }}>Add the data files</h2>
          <input
            type="file"
            ref={fileInputRef}
            accept="csv"
            multiple
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <Button
            onClick={handleButtonClick}
            button_type="primary"
            full={false}
            disabled={dataModel === null || showUploadButton === false}
          >
            Browse
          </Button>
          {selectedFiles && (
            <Container
              style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                alignContent: 'flex-end',
                alignItems: 'flex-end',
                minWidth: '100%',
                marginTop: '-5rem',
                padding: '2rem'
              }}
            >
              <Select
                style={{
                  minWidth: '10%',
                  maxWidth: '10%',
                  marginBottom: '-1rem',
                  marginLeft: '1rem'
                }}
                value={currentFile?.name}
                onChange={(e) => {
                  const file = Array.from(selectedFiles).find(
                    (file) => file.name === e.target.value
                  );
                  if (file) {
                    setCurrentFile(file);
                  }
                }}
              >
                {Array.from(selectedFiles).map((file) => (
                  <MenuItem key={file.name} value={file.name}>
                    {file.name}
                  </MenuItem>
                ))}
              </Select>
              <Text>Preview data</Text>
            </Container>
          )}
          {sample_csv_data.length ? (
            <CsvDisplay csvData={sample_csv_data} />
          ) : null}
          <br />
          {logs && (
            <>
              <Heading size="h1">Status</Heading>
              <pre style={{ fontSize: '1.4rem', lineHeight: '2rem' }}>
                {logs}
              </pre>
            </>
          )}
          {allFilesValidated && showUploadButton && (
            <Button
              onClick={() => {
                setShowUploadButton(false);
                uploadAndPublish(version, selectedFiles, setLogs);
              }}
              button_type="primary"
              full={false}
            >
              Upload and Publish
            </Button>
          )}
        </>
      </Card>
    </Container>
  );
};

export default DatasetUploadComponent;
