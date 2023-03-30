import React from 'react';
import { useQuery } from 'react-query';
import { ApiError } from 'src/client';

import Datasets from './Datasets.component';
import { DefaultService, GetMultipleDataset_Out } from 'src/client';

const DatasetsContainer: React.FC = () => {
  const { data, isLoading, status, error, refetch } = useQuery<GetMultipleDataset_Out, ApiError>(['datasets'], DefaultService.getAllDatasets, { refetchOnMount: 'always' });

  return Datasets({ status: status, getAllDatasetsData: data!, error: error! })
}

export default DatasetsContainer;
