import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router';
import Dataset from './Dataset.component';
import { ApiError, DefaultService, GetDataset_Out } from 'src/client';

const DatasetContainer: React.FC = () => {
  const { id } = useParams() as { id: string };
  const queryClient = useQueryClient();

  const { data, isLoading, status, error, refetch } = useQuery<
    GetDataset_Out,
    ApiError
  >([id], () => DefaultService.getDataset(id), {
    refetchOnMount: 'always'
  });

  return Dataset({
    status: status,
    // @ts-ignore
    getDatasetData: data,
    refetch: refetch,
    // @ts-ignore
    error: error,
    userData: queryClient.getQueryData('userData')
  });
};

export default DatasetContainer;
