import React from 'react';
import Spinner from 'src/components/Spinner';
import { TDatasetVersionProps } from './DatasetVersion.types';
import DatasetVersionSuccess from './DatasetVersion.success';
import DatasetVersionFailure from './DatasetVersion.failure';
import { ConditionalRender } from 'src/components/ConditionalRenderRQuery';

const DatasetVersion: React.FC<TDatasetVersionProps> = ({
  status,
  getDatasetVersionData,
  refetch,
  error
}) => {
  return (
    <ConditionalRender
      status={status}
      success={() => (
        <DatasetVersionSuccess
          getDatasetVersionData={getDatasetVersionData}
          refetch={refetch}
        />
      )}
      failure={() => <DatasetVersionFailure error={error} />}
    >
      <Spinner />
    </ConditionalRender>
  );
};

export default DatasetVersion;
