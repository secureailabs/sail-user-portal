import React from 'react';
import { useQuery } from 'react-query';
import { ApiError } from 'src/client';

import Datasets from './Datasets.component';
import { DefaultService, GetMultipleDataset_Out } from 'src/client';
import { SpinnerOnly } from 'src/components/Spinner';

const DatasetsContainer: React.FC = () => {
  const { data, isLoading, status, error, refetch } = useQuery<
    GetMultipleDataset_Out,
    ApiError
  >(['datasets'], DefaultService.getAllDatasets, { refetchOnMount: 'always' });

  if (isLoading) {
    return <SpinnerOnly />;
  }
  if (status === 'error') {
    return <div>error</div>;
  }
  if (!data) {
    return <div></div>;
  }

  return Datasets({ status: status, getAllDatasetsData: data, error: error });
};

export default DatasetsContainer;
