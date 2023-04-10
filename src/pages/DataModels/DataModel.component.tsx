import React from 'react';
import _ from 'lodash';
import Spinner from 'src/components/Spinner';
import { TDataModelProps } from './DataModel.types';
import DataModelSuccess from './DataModel.success';
import DataModelFailure from './DataModel.failure';
import { ConditionalRender } from 'src/components/ConditionalRenderRQuery';

const DataModel: React.FC<TDataModelProps> = ({
  status,
  getDataModelData,
  error
}) => {
  return (
    <ConditionalRender
      status={status}
      success={() => <DataModelSuccess getDataModelData={getDataModelData} />}
      failure={() => <DataModelFailure error={error} />}
    >
      <Spinner />
    </ConditionalRender>
  );
};

export default DataModel;
