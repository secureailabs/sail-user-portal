import * as React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
// import Dashboard from 'pages/Dashboard';
import Login from 'src/pages/Login';
// import Signup from '@pages/Signup';

import ProtectedRoute from './ProtectedRoute';
import UnProtectedRoute from './UnProtectedRoute';

const AppRouter: React.FC = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route
        path="/login"
        element={
          <UnProtectedRoute path='' exact={false} redirect="/dashboard">
            <Login />
          </UnProtectedRoute>
        }
      />
      <Route path="/dashboard/*" element={<></>} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
};

export default AppRouter;
