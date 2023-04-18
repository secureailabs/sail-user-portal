import React from 'react';
import { useQuery } from 'react-query';
import { ApiError, DefaultService, GetDataModelSeries_Out } from 'src/client';
import { TSeriesProps } from './Series.types';
import Series from './Series.component';

const SeriesContainer: React.FC<TSeriesProps> = ({ series_id }) => {
  const { data, status, error } = useQuery<GetDataModelSeries_Out, ApiError>(
    [series_id],
    () => DefaultService.getDataModelSeriesInfo(series_id),
    {
      refetchOnMount: 'always'
    }
  );

  return Series({ status: status, getSeriesData: data, error: error });
};

export default SeriesContainer;
