import React from 'react';
import { useQuery } from 'react-query';
import { ApiError, GetMultipleDatasetVersion_Out } from 'src/client';

import DatasetVersions from './DatasetVersions.component';
import { DefaultService } from 'src/client';
import { useParams } from 'react-router-dom';

const DatasetVersionsContainer: React.FC = () => {
  const { id } = useParams() as { id: string };

  const { data, isLoading, status, error, refetch } = useQuery<
    GetMultipleDatasetVersion_Out,
    ApiError
  >(['dataset_versions'], () => DefaultService.getAllDatasetVersions(id), {
    refetchOnMount: 'always'
  });

  return DatasetVersions({
    status: status,
    getAllDatasetVersionsData: data!,
    refetch: refetch,
    error: error
  });
};

export default DatasetVersionsContainer;
