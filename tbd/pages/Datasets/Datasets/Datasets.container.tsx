import React from 'react';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

import Datasets from './Datasets.component';
import { DefaultService, GetMultipleDataset_Out } from 'client';

const DatasetsContainer: React.FC = () => {
  const { data, isLoading, status, error, refetch } = useQuery<GetMultipleDataset_Out['datasets'], AxiosError>(['datasets'], DefaultService.getAllDatasets, { refetchOnMount: 'always' });

  return Datasets({ status: status, getAllDatasetsData: data, error: error })
}

export default DatasetsContainer;
