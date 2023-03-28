import * as React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import UnProtectedRoute from './UnProtectedRoute';
import RestrictedRoute from './RestrictedRoute';
// import Datasets from 'pages/Datasets/Datasets';
// import Dataset from 'pages/Datasets/Dataset';
// import SettingsPage from 'pages/Settings';
// import Organization from 'pages/Organization';
// import UnderConstruction from 'pages/UnderConstruction';
// import VirtualMachines from 'pages/VirtualMachines';
import DataFederation from 'src/pages/DataFederation';
import CustomizableDashboard from 'src/components/CustomizableDashboard';
// import ViewOrganization from 'pages/ViewOrganizationOld';
// import ViewOrganization from 'pages/ViewOrganization';
// import Downloads from 'pages/Downloads/Downloads';
// import Download from 'pages/Downloads/Download';
// import Documentation from 'pages/Documentation';

const DashboardRouter: React.FC = (): React.ReactElement => (
  <Routes>
    <Route
      path="/federation"
      element={
        <ProtectedRoute redirect="/login">
          {/* @ts-ignore */}
          <DataFederation />
        </ProtectedRoute>
      }
    />
    {/* <Route
      path="/registries/:id"
      element={
        <ProtectedRoute redirect="/login">
          <DataFederation />
        </ProtectedRoute>
      }
    />
    <Route
      path="/organizations/:id"
      element={
        <ProtectedRoute redirect="/login">
          <ViewOrganization />
        </ProtectedRoute>
      }
    />
    <Route
      path="/settings"
      element={
        <ProtectedRoute redirect="/login">
          <SettingsPage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/my-organization"
      element={
        <ProtectedRoute redirect="/login">
          <Organization />
        </ProtectedRoute>
      }
    />
    <Route
      path="/computational-resources"
      element={
        <ProtectedRoute redirect="/login">
          <VirtualMachines />
        </ProtectedRoute>
      }
    /> */}

    <Route
      path="/"
      element={
        <ProtectedRoute redirect="/login">
          <CustomizableDashboard />
        </ProtectedRoute>
      }
    />
    {/* <Route
      path="/documentation"
      element={
        <ProtectedRoute redirect="/login">
          <Documentation />
        </ProtectedRoute>
      }
    />
    <Route
      path="/downloads"
      element={
        <ProtectedRoute redirect="/login">
          <Downloads />
        </ProtectedRoute>
      }
    />
    <Route
      path="/downloads/:id"
      element={
        <ProtectedRoute redirect="/login">
          <Download />
        </ProtectedRoute>
      }
    />
    <Route
      path="/datasets"
      element={
        <ProtectedRoute redirect="/login">
          <Datasets />
        </ProtectedRoute>
      }
    />
    <Route
      path="/datasets/:id"
      element={
        <ProtectedRoute redirect="/login">
          <Dataset />
        </ProtectedRoute>
      }
    /> */}
    <Route path="*" element={<Navigate to="/dashboard" />} />

    {/* <Route
      path="/datasets/:id/:version"
      element={
        <ProtectedRoute redirect="/login">
          <DatasetVersion />
        </ProtectedRoute>
      }
    /> */}
  </Routes >
);

export default DashboardRouter;
