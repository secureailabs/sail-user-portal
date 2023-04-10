import React from 'react';

import { TDataModelFailure } from './DataModel.types';

const DataModelFailure: React.FC<TDataModelFailure> = ({ error }) => {
  if (error) {
    return <></>;
  }
  return <>An unknown error has occured</>;
};

export default DataModelFailure;
