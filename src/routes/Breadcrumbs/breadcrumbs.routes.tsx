import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { QueryClient, useQueryClient } from 'react-query';
import React, { useState } from 'react';
import Breadcrumbs from 'src/components/Breadcrumbs';

const updateBreadcrumb = (
  queryKey: string,
  nameKey: string,
  setBreadcrumb: React.Dispatch<React.SetStateAction<string>>,
  queryClient: QueryClient,
  self: () => void
) => {
  const queryState = queryClient.getQueryState(queryKey);

  if (queryState?.data) {
    // @ts-ignore
    setBreadcrumb(queryState.data[nameKey]);
  }

  if (!queryState || new Date().getTime() - queryState.dataUpdatedAt >= 100) {
    setTimeout(self, 15);
  }
};

const BreadcrumbRoutes: React.FC = () => {
  const [datasetName, setDatasetName] = useState('');
  const [downloadName, setDownloadName] = useState('');
  const [federationName, setFederationName] = useState('');
  const [datasetVersionName, setDatasetVersionName] = useState('');

  const queryClient = useQueryClient();

  const updateFederationName = () =>
    updateBreadcrumb(
      'federation',
      'name',
      setFederationName,
      queryClient,
      updateFederationName
    );

  const updateDatasetName = () =>
    updateBreadcrumb(
      'dataset',
      'name',
      setDatasetName,
      queryClient,
      updateDatasetName
    );

  const updateDatasetVersionName = () =>
    updateBreadcrumb(
      'dataset_version',
      'name',
      setDatasetVersionName,
      queryClient,
      updateDatasetVersionName
    );

  const updateDownloadName = () =>
    updateBreadcrumb(
      'download',
      'primaryText',
      setDownloadName,
      queryClient,
      updateDownloadName
    );

  const routes = [
    {
      path: '/',
      breadcrumb: null
    },
    {
      path: '/dashboard',
      breadcrumb: 'Home'
    },
    {
      path: '/dashboard/federation',
      breadcrumb: () => {
        updateFederationName();
        return federationName;
      }
    },
    {
      path: '/dashboard/datasets/:id',
      breadcrumb: () => {
        updateDatasetName();
        return datasetName;
      }
    },
    {
      path: '/dashboard/datasets/:id/versions/:version',
      breadcrumb: () => {
        updateDatasetVersionName();
        return datasetVersionName;
      }
    },
    {
      path: '/dashboard/computational-resources',
      breadcrumb: 'Computational Resources'
    },
    {
      path: '/dashboard/downloads/:id',
      breadcrumb: () => {
        updateDownloadName();
        return downloadName;
      }
    },
    {
      path: '/dashboard/my-organization',
      breadcrumb: 'My Organization'
    }
  ];
  // @ts-ignore
  return <Breadcrumbs breadcrumbsData={useBreadcrumbs(routes)} />;
};

export default BreadcrumbRoutes;
