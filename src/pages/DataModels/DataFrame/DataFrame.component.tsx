import React from 'react';
import Spinner from 'src/components/Spinner';
import { TDataFrameRenderProps } from './DataFrame.types';
import DataFrameSuccess from './DataFrame.success';
import DataFrameFailure from './DataFrame.failure';
import { ConditionalRender } from 'src/components/ConditionalRenderRQuery';

const DataFrame: React.FC<TDataFrameRenderProps> = ({
  status,
  getDataFrameData,
  error
}) => {
  return (
    <ConditionalRender
      status={status}
      success={() =>
        getDataFrameData ? (
          <DataFrameSuccess getDataFrameData={getDataFrameData} />
        ) : (
          <DataFrameFailure error={error} />
        )
      }
      failure={() => <DataFrameFailure error={error} />}
    >
      <Spinner />
    </ConditionalRender>
  );
};

export default DataFrame;
