import {
  DefaultService,
  OpenAPI,
  Body_upload_dataset
} from 'src/datasetUpload';

export function uploadAndPublish(
  dataset_version_id: string,
  selectedFiles: FileList | null,
  setLogs: React.Dispatch<React.SetStateAction<string>>
) {
  if (!process.env.REACT_APP_SAIL_DATA_UPLOAD_SERVICE_URL)
    throw new Error('REACT_APP_SAIL_DATA_UPLOAD_SERVICE_URL not set');

  OpenAPI.BASE = process.env.REACT_APP_SAIL_DATA_UPLOAD_SERVICE_URL;
  OpenAPI.TOKEN = localStorage.getItem('token') || '';
  if (selectedFiles) {
    const file_blobs: Body_upload_dataset = {
      dataset_files: []
    };
    for (let i = 0; i < selectedFiles.length; i++) {
      setLogs((prev) => prev + '\nUploading ' + selectedFiles[i].name + '...');
      file_blobs.dataset_files.push(selectedFiles[i]);
    }
    DefaultService.uploadDataset(dataset_version_id, file_blobs)
      .then(() => {
        setLogs((prev) => prev + '\nUpload of all files success!');
      })
      .catch((err) => {
        setLogs((prev) => prev + '\nUpload of all files failed! Error: ' + err);
      });
  }
}
