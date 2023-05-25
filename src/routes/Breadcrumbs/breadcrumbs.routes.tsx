import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { QueryClient, useQueryClient } from 'react-query';
import React, { useState } from 'react';
import Breadcrumbs from 'src/components/Breadcrumbs';

const updateBreadcrumb = (
  queryKey: string,
  nameKey: string,
  setBreadcrumb: React.Dispatch<React.SetStateAction<string>>,
  queryClient: QueryClient,
  self: (arg: string) => void
) => {
  const queryState = queryClient.getQueryState(queryKey);

  if (queryState?.data) {
    // @ts-ignore
    setBreadcrumb(queryState.data[nameKey]);
  }

  if (!queryState || !queryState.data) {
    setTimeout(() => self(queryKey), 15);
  }
};

const BreadcrumbRoutes: React.FC = () => {
  const [datasetName, setDatasetName] = useState('');
  const [downloadName, setDownloadName] = useState('');
  const [federationName, setFederationName] = useState('');
  const [datasetVersionName, setDatasetVersionName] = useState('');

  const queryClient = useQueryClient();

  const updateFederationName = (id: string) =>
    updateBreadcrumb(
      id,
      'name',
      setFederationName,
      queryClient,
      updateFederationName
    );

  const updateDatasetName = (id: string) =>
    updateBreadcrumb(
      id,
      'name',
      setDatasetName,
      queryClient,
      updateDatasetName
    );

  const updateDatasetVersionName = (version_id: string) =>
    updateBreadcrumb(
      version_id,
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
        updateFederationName('federation');
        return federationName;
      }
    },
    {
      path: '/dashboard/datasets/:id',
      breadcrumb: (match: any) => {
        updateDatasetName(match.match.params.id);
        return datasetName;
      }
    },
    {
      path: '/dashboard/datasets/:id/versions/:version',
      breadcrumb: (match: any) => {
        updateDatasetVersionName(match.match.params.version);
        return datasetVersionName;
      }
    },
    {
      path: '/dashboard/researcher-portal',
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
