import React from 'react';
import Spinner from 'src/components/Spinner';
import { TDatasetVersionProps } from './DatasetVersion.types';
import DatasetVersionSuccess from './DatasetVersion.success';
import DatasetVersionFailure from './DatasetVersion.failure';
import { ConditionalRender } from 'src/components/ConditionalRenderRQuery';

const DatasetVersion: React.FC<TDatasetVersionProps> = ({
  status,
  getDatasetVersionData,
  error
}) => {
  return (
    <ConditionalRender
      status={status}
      success={() => (
        <DatasetVersionSuccess getDatasetVersionData={getDatasetVersionData} />
      )}
      failure={() => <DatasetVersionFailure error={error} />}
    >
      <Spinner />
    </ConditionalRender>
  );
};

export default DatasetVersion;
