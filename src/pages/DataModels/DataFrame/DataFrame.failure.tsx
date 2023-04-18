import React from 'react';
import { TDataFrameFailure } from './DataFrame.types';

const DataFrameFailure: React.FC<TDataFrameFailure> = ({ error }) => {
  return <>{error}</>;
};

export default DataFrameFailure;
