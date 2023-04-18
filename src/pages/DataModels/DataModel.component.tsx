import React from 'react';
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
      success={() =>
        getDataModelData ? (
          <DataModelSuccess getDataModelData={getDataModelData} />
        ) : (
          <DataModelFailure error={error} />
        )
      }
      failure={() => <DataModelFailure error={error} />}
    >
      <Spinner />
    </ConditionalRender>
  );
};

export default DataModel;
