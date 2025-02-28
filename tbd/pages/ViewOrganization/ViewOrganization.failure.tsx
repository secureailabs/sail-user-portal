import React from 'react';

import { TDataFederationError } from './ViewOrganization.types';

const DataFederationFailure: React.FC<TDataFederationError> = ({ error }) => {
  if (error) {
    return <></>;
  }
  return <>An unkown error has occured</>;
};

export default DataFederationFailure;
