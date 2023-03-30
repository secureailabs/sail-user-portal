import React from 'react';

import { TDatasetVersionFailure } from './DatasetVersion.types';

const DatasetVersionFailure: React.FC<TDatasetVersionFailure> = ({ error }) => {
  if (error) {
    return <></>;
  }
  return <>An unknown error has occured</>;
};

export default DatasetVersionFailure;
