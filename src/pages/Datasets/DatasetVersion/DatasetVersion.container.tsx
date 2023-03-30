import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router';
import DatasetVersion from './DatasetVersion.component';
import { ApiError, DefaultService, GetDatasetVersion_Out } from 'src/client';

const DatasetVersionContainer: React.FC = () => {
  const { version } = useParams() as { version: string };
  const queryClient = useQueryClient();

  const { data, isLoading, status, error, refetch } = useQuery<
    GetDatasetVersion_Out,
    ApiError
  >(['dataset_version'], () => DefaultService.getDatasetVersion(version), {
    refetchOnMount: 'always'
  });

  return DatasetVersion({
    status: status,
    // @ts-ignore
    getDatasetVersionData: data,
    refetch: refetch,
    // @ts-ignore
    error: error,
    userData: queryClient.getQueryData('userData')
  });
};

export default DatasetVersionContainer;
