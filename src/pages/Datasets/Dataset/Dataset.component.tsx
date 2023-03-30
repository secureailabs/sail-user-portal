import React from 'react';
import _ from 'lodash';
import Spinner from 'src/components/Spinner';
import { TDatasetProps } from './Dataset.types';
import DatasetSuccess from './Dataset.success';
import DatasetFailure from './Dataset.failure';
import { ConditionalRender } from 'src/components/ConditionalRenderRQuery';

const Dataset: React.FC<TDatasetProps> = ({
  status,
  getDatasetData,
  error
}) => {
  return (
    <ConditionalRender
      status={status}
      success={() => <DatasetSuccess getDatasetData={getDatasetData} />}
      failure={() => <DatasetFailure error={error} />}
    >
      <Spinner />
    </ConditionalRender>
  );
};

export default Dataset;
