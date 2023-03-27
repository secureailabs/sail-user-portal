import React from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { logout } from 'APIs/user/user.utils';

import Dashboard from './Dashboard.component';


const DashboardContainer: React.FC = () => {
  const queryClient = useQueryClient()
  const logoutMutation = useMutation(logout, {
    onSettled: () => {
      queryClient.invalidateQueries('userData');
    }, retry: false
  })

  return Dashboard({ userData: queryClient.getQueryData('userData'), logoutMutationFunction: logoutMutation.mutate })
}

export default DashboardContainer
