import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { AxiosError } from 'axios';
import { useParams } from 'react-router';

import Dataset from './Dataset.component';

import { DefaultService, GetDataset_Out } from 'client';

const DatasetContainer: React.FC = () => {

  const { id } = useParams() as { id: string };

  const queryClient = useQueryClient()

  const { data, isLoading, status, error, refetch } = useQuery<GetDataset_Out, AxiosError>(['dataset'], () => DefaultService.getDataset(id), { refetchOnMount: 'always' });

  return Dataset({ status: status, getDatasetData: data, refetch: refetch, error: error, userData: queryClient.getQueryData('userData') })
}

export default DatasetContainer;
