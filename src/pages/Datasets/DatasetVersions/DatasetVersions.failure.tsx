import React from 'react';
import { TDatasetFailure } from '../Dataset/Dataset.types';

const DatasetVersionsFailure: React.FC<TDatasetFailure> = () => {
  return <p>There was an error fetching dataset versions. </p>;
};

export default DatasetVersionsFailure;
