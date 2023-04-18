import React from 'react';
import { TSeriesFailure } from './Series.types';

const SeriesFailure: React.FC<TSeriesFailure> = ({ error }) => {
  return <>{error}</>;
};

export default SeriesFailure;
