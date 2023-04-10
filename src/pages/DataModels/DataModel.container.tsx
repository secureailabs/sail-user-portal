import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import DataModel from './DataModel.component';
import { ApiError, GetDataset_Out } from 'src/client';

const DataModelContainer: React.FC = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, status, error, refetch } = useQuery<
    GetDataset_Out | null,
    ApiError
  >(
    ['dataset'],
    () => {
      return null;
    },
    {
      refetchOnMount: 'always'
    }
  );

  return DataModel({
    status: status,
    // @ts-ignore
    getDataModelData: data,
    refetch: refetch,
    // @ts-ignore
    error: error,
    userData: queryClient.getQueryData('userData')
  });
};

export default DataModelContainer;
