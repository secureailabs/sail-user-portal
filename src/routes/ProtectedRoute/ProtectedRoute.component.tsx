import React, { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { IProtectedRoutes } from './ProtectedRoute.types';

import { AbsoluteSpinner } from 'src/components/Spinner';

const ProtectedRoute: React.FC<IProtectedRoutes> = ({
  userState,
  children,
  redirect
}): ReactElement => {
  const { pathname } = useLocation();
  // check if user finished loading, else run spinner
  if (userState && !userState.isFetching) {
    // if there is not user, render register page
    if (!userState.data || userState.error) {
      window.localStorage.setItem('login-redirect', pathname);

      return <Navigate replace to={redirect} />;
    }
    window.localStorage.removeItem('login-redirect');
    // if there is a user, redirect to dashboard dashboard
    return children;
  }

  return <AbsoluteSpinner />;
};

export default ProtectedRoute;
