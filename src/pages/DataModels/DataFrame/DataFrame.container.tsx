import React from 'react';
import { useQuery } from 'react-query';
import {
  ApiError,
  DefaultService,
  GetDataModelDataframe_Out
} from 'src/client';
import { TDataFrameProps } from './DataFrame.types';
import DataFrame from './DataFrame.component';

const DataFrameContainer: React.FC<TDataFrameProps> = ({ dataframe_id }) => {
  const { data, status, error } = useQuery<GetDataModelDataframe_Out, ApiError>(
    [dataframe_id],
    () => DefaultService.getDataModelDataframeInfo(dataframe_id),
    {
      refetchOnMount: 'always'
    }
  );

  return DataFrame({ status: status, getDataFrameData: data, error: error });
};

export default DataFrameContainer;
