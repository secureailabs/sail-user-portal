import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import DataModel from './DataModel.component';
import { ApiError, DefaultService, GetMultipleDataModel_Out } from 'src/client';

const DataModelContainer: React.FC = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, status, error, refetch } = useQuery<
    GetMultipleDataModel_Out,
    ApiError
  >(['dataModels'], DefaultService.getAllDataModelInfo, {
    refetchOnMount: 'always'
  });

  return DataModel({
    status: status,
    getDataModelData: data?.data_models?.[0],
    // refetch: refetch,
    error: error
    // userData: queryClient.getQueryData('userData')
  });
};

export default DataModelContainer;
