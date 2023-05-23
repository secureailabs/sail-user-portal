import {
  DefaultService,
  OpenAPI,
  Body_upload_dataset
} from 'src/datasetUpload';

export function uploadAndPublish(
  dataset_version_id: string,
  selectedFiles: File[] | null,
  addLogMessage: (message: string) => void
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
      addLogMessage('Uploading ' + selectedFiles[i].name + '...');
      file_blobs.dataset_files.push(selectedFiles[i]);
    }
    DefaultService.uploadDataset(dataset_version_id, file_blobs)
      .then(() => {
        addLogMessage('Upload of all files success!');
      })
      .catch((err) => {
        addLogMessage('Upload of all files failed! Error: ' + err);
      });
  }
}
