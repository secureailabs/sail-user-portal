import { DefaultService, UpdateDatasetVersion_In } from 'src/client';

export function updateDatasetInfo(dataset_version_id: string, notes: string) {
  const datasetUpdate: UpdateDatasetVersion_In = {
    note: notes
  };
  DefaultService.updateDatasetVersion(dataset_version_id, datasetUpdate)
    .then(() => {
      console.log('Dataset updated', notes);
    })
    .catch((err) => {
      console.log('Dataset update failed! Error: ' + err);
    });
}
