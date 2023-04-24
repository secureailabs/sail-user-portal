import React from 'react';
import { useQuery } from 'react-query';
import {
  ApiError,
  DataModelDataframeState,
  DefaultService,
  GetDataModelDataframe_Out
} from 'src/client';
import { TDataFrameProps } from './DataFrame.types';
import DataFrame from './DataFrame.component';

const DataFrameContainer: React.FC<TDataFrameProps> = ({ dataframe_id }) => {
  if (dataframe_id === 'new') {
    const newDataframe: GetDataModelDataframe_Out = {
      id: 'new',
      name: 'New Series',
      description: 'New Series Description',
      organization_id: 'new',
      data_model_series: [],
      state: DataModelDataframeState.ACTIVE
    };

    return DataFrame({
      status: 'success',
      getDataFrameData: newDataframe,
      error: null
    });
  }

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
