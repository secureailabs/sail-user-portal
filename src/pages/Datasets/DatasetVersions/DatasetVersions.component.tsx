import React from 'react';
import { ConditionalRender } from 'src/components/ConditionalRenderRQuery';
import Spinner from 'src/components/Spinner/SpinnerOnly.component';
import { TDatasetVersionsProps } from './DatasetVersions.types';
import DatasetVersionsSuccess from './DatasetVersions.success';
import DatasetVersionsFailure from './DatasetVersions.failure';

const DatasetVersions: React.FC<TDatasetVersionsProps> = ({
  status,
  getAllDatasetVersionsData,
  error
}) => (
  <ConditionalRender
    status={status}
    success={() => (
      <DatasetVersionsSuccess
        getAllDatasetVersionsData={getAllDatasetVersionsData}
      />
    )}
    failure={() => <DatasetVersionsFailure error={error} />}
  >
    <Spinner />
  </ConditionalRender>
);

export default DatasetVersions;
