import React from 'react';
import { useQuery } from 'react-query';
import {
  ApiError,
  DataModelSeriesState,
  DefaultService,
  GetDataModelSeries_Out
} from 'src/client';
import { TSeriesProps } from './Series.types';
import Series from './Series.component';

const SeriesContainer: React.FC<TSeriesProps> = ({ series_id }) => {
  if (series_id === 'new') {
    const newSeries: GetDataModelSeries_Out = {
      id: 'new',
      name: 'New Series',
      description: 'New Series Description',
      series_schema: {
        type: 'SeriesDataModelCategorical',
        series_name: 'New Series',
        series_data_model_id: 'new'
      },
      organization_id: 'new',
      state: DataModelSeriesState.ACTIVE
    };

    return Series({ status: 'success', getSeriesData: newSeries, error: null });
  }

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
