import Card from 'src/components/Card';
import Button from 'src/components/Button';
import React, { useRef, ChangeEvent } from 'react';
import { Container, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';
import CsvDisplay from './CsvDisplay';
import papaparse from 'papaparse';
import Text from 'src/components/Text';
import { uploadAndPublish } from './DatasetUploadPortal.utils';
import { useParams } from 'react-router-dom';

const DatasetUploadComponent: React.FC = () => {
  const [selectedFiles, setSelectedFile] = React.useState<FileList | null>(
    null
  );
  const [currentFile, setCurrentFile] = React.useState<File | null>(null);
  const [allFilesValidated, setAllFilesValidated] = React.useState(false);
  const [sample_csv_data, setSampleCsvData] = React.useState<Array<any>>([]);
  const [logs, setLogs] = React.useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { version } = useParams() as { version: string };

  function handleButtonClick() {
    fileInputRef.current?.click();
  }

  React.useEffect(() => {
    previewFile();
  }, [currentFile]);

  React.useEffect(() => {
    validateFiles();
  }, [selectedFiles]);

  function validateFiles() {
    if (selectedFiles) {
      let allValid = true;
      for (let i = 0; i < selectedFiles.length; i++) {
        setLogs(
          (prev) => prev + '\nValidating ' + selectedFiles[i].name + '...'
        );
        if (!selectedFiles[i].name.endsWith('.csv')) {
          allValid = false;
          setLogs(
            (prev) =>
              prev +
              '\nValidation of file ' +
              selectedFiles[i].name +
              ' failed!'
          );
        } else {
          setLogs(
            (prev) =>
              prev +
              '\nValidation of file ' +
              selectedFiles[i].name +
              ' success!'
          );
        }
      }
      setAllFilesValidated(allValid);
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
            <Text>
              <h3>Status</h3>
              <pre>{logs}</pre>
            </Text>
          )}
          {allFilesValidated && (
            <Button
              onClick={() => uploadAndPublish(version, selectedFiles, setLogs)}
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
