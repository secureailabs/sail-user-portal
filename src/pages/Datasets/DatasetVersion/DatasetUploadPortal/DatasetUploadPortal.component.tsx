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
  TFileInformation,
  TDataModel
} from './DatasetUploadPortal.types';
import Heading from 'src/components/Heading';
import Table from 'src/components/Table';

function booleanToEmoji(value: boolean) {
  return value ? '✔️' : '❌';
}

interface UploadProps {
  cell: {
    value: string;
  };
}

const DatasetUploadComponent: React.FC = () => {
  // State to keep track of the validation state of the dataframes
  const [dataModel, setDataModel] = React.useState<TDataModel | null>(null);
  const [dataframeState, setDataframeState] = React.useState<
    TFileInformation[]
  >([]);
  const [currentFile, setCurrentFile] = React.useState<File | null>(null);
  const [allFilesValidated, setAllFilesValidated] = React.useState(false);
  const [sample_csv_data, setSampleCsvData] = React.useState<Array<any>>([]);
  const [logs, setLogs] = React.useState<string>(
    'Wait.. Fetching data model..'
  );
  const { version } = useParams() as { version: string };
  const [showUploadButton, setShowUploadButton] = React.useState(true);

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

    const data_frames_validation_state: TFileInformation[] = [];

    for (const dataframe_id of datamodel.data_model_dataframes) {
      const dataframe = await DefaultService.getDataModelDataframeInfo(
        dataframe_id
      );

      // create an object to keep track of the validation state of the data frame
      const dataframeFileInfo: TFileInformation = {
        dataframeId: dataframe.id,
        dataframeName: dataframe.name,
        file: null,
        required: true,
        validationState: false
      };

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
      data_frames_validation_state.push(dataframeFileInfo);
    }
    // Set the data model and the validation state
    setDataframeState(data_frames_validation_state);

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

  React.useEffect(() => {
    validateFiles();
  }, [dataframeState]);

  React.useEffect(() => {
    previewFile();
  }, [currentFile]);

  function validateFiles() {
    if (dataModel) {
      // check if all the files are validated
      const allFilesValidated = dataframeState.every(
        (dataframe) => dataframe.validationState === true
      );
      setAllFilesValidated(allFilesValidated);
    }
  }

  function processUploadedFile(fileToProcess: File, dataframeName: string) {
    console.log('Processing file in function' + fileToProcess.name);
    console.log('Processing file in function' + dataModel);
    if (fileToProcess && dataModel) {
      console.log('both presern');
      const dataframeDataModel = dataModel.data_model_dataframes.find(
        (dataframe) => dataframe.data_frame_name === dataframeName
      );
      if (!dataframeDataModel) {
        addLogMessage(
          'Dataframe ' +
            dataframeName +
            ' is not present in the data model. Ignoring the file.'
        );
        return;
      }
      // Validate the file
      console.log('Validating file ' + fileToProcess.name);
      validateFile(fileToProcess, dataframeDataModel, addLogMessage)
        .then((result) => {
          if (result === true) {
            console.log(
              'Validation of file ' + fileToProcess.name + ' success!'
            );
            addLogMessage(
              'Validation of file ' + fileToProcess.name + ' success!'
            );
            // Update the validation state of the dataframe
            const updatedDataframeState = dataframeState.map((dataframe) => {
              if (dataframe.dataframeName === dataframeName) {
                dataframe.file = fileToProcess;
                dataframe.validationState = true;
              }
              return dataframe;
            });
            setDataframeState(updatedDataframeState);
          } else {
            addLogMessage(
              'Validation of file ' + fileToProcess.name + ' failed!'
            );
            // Update the validation state of the dataframe
            const updatedDataframeState = dataframeState.map((dataframe) => {
              if (dataframe.dataframeName === dataframeName) {
                dataframe.file = fileToProcess;
                dataframe.validationState = false;
              }
              return dataframe;
            });
            setDataframeState(updatedDataframeState);
          }
        })
        .catch((error) => {
          addLogMessage(
            'Unexpected validation failure for ' +
              fileToProcess.name +
              error.toString()
          );
        });
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

  const UploadCell: React.FC<UploadProps> = ({ cell: { value } }) => {
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    function handleButtonClick() {
      fileInputRef.current?.click();
    }

    function handleSelectFile(event: ChangeEvent<HTMLInputElement>) {
      const file = event.target.files;
      if (file?.length === 1) {
        setSelectedFile(file[0]);
        if (!currentFile) {
          setCurrentFile(file[0]);
          previewFile();
        }
        // call the validation function
        console.log('Processing file ' + file[0].name);
        processUploadedFile(file[0], value);
      }
    }
    return (
      <Container>
        <input
          type="file"
          ref={fileInputRef}
          accept="csv"
          style={{ display: 'none' }}
          onChange={handleSelectFile}
        />
        <Button
          onClick={handleButtonClick}
          button_type="primary"
          full={false}
          disabled={!showUploadButton}
        >
          Browse
        </Button>
        {selectedFile?.name}
      </Container>
    );
  };

  const upload_tracking_table_columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'dataframeId'
      },
      {
        id: 'dataframeName',
        Header: 'Dataframe',
        accessor: 'dataframeName'
      },
      {
        id: 'state',
        Header: 'Validation Success',
        accessor: (value: any) =>
          value.validationState.toString() +
          booleanToEmoji(value.validationState)
      },
      {
        id: 'required',
        Header: 'Required',
        accessor: (value: any) => value.required.toString()
      },
      {
        id: 'fileName',
        Header: 'File',
        accessor: (row: TFileInformation) => `${row.dataframeName}`,
        Cell: UploadCell
      }
    ],
    []
  );

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
          <Table
            // @ts-ignore
            columns={upload_tracking_table_columns}
            data={dataModel ? dataframeState : []}
          />
          {currentFile && (
            <Container
              style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                alignContent: 'flex-end',
                alignItems: 'flex-end',
                minWidth: '100%',
                marginTop: '5rem',
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
                value={currentFile?.name.split('.')[0]}
                onChange={(e) => {
                  const dataframe = Array.from(dataframeState).find(
                    (dataframe) =>
                      dataframe.dataframeName === e.target.value &&
                      dataframe.file
                  );
                  if (dataframe) {
                    setCurrentFile(dataframe.file);
                  }
                }}
              >
                {Array.from(dataframeState).map((dataframeInfo) => (
                  <MenuItem
                    key={dataframeInfo.dataframeName}
                    value={dataframeInfo.dataframeName}
                  >
                    {dataframeInfo.dataframeName}
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
                // get the list of files form dataframeInfo and pass it to uploadAndPublish
                const fileList: Array<File> = [];
                dataframeState.forEach((dataframe) => {
                  if (dataframe.file) {
                    fileList.push(dataframe.file);
                  }
                });
                setShowUploadButton(false);
                uploadAndPublish(version, fileList, setLogs);
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
