import React from 'react';
import { useMutation, useQueryClient } from 'react-query';

import Dashboard from './Dashboard.component';
import { OpenAPI, UserInfo_Out } from 'src/client';

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

  const userData = queryClient.getQueryData<UserInfo_Out>('userData');
  if (!userData) {
    return null;
  }

  return Dashboard({
    userData: userData,
    logoutMutationFunction: logoutMutation.mutate
  });
};

export default DashboardContainer;
