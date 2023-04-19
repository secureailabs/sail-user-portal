import React from 'react';
import { useMutation, useQueryClient } from 'react-query';

import Dashboard from './Dashboard.component';
import { OpenAPI } from 'src/client';

const logout = async () => {
  OpenAPI.TOKEN = '';
  localStorage.removeItem('token');
};

const DashboardContainer: React.FC = () => {
  const queryClient = useQueryClient();
  const logoutMutation = useMutation(logout, {
    onSettled: () => {
      queryClient.invalidateQueries('userData');
    },
    retry: false
  });

  return Dashboard({
    // @ts-ignore
    userData: queryClient.getQueryData('userData'),
    logoutMutationFunction: logoutMutation.mutate
  });
};

export default DashboardContainer;
