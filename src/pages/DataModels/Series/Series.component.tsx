import React from 'react';
import Spinner from 'src/components/Spinner';
import { TSeriesRenderProps } from './Series.types';
import SeriesSuccess from './Series.success';
import SeriesFailure from './Series.failure';
import { ConditionalRender } from 'src/components/ConditionalRenderRQuery';

const Series: React.FC<TSeriesRenderProps> = ({
  status,
  getSeriesData,
  error
}) => {
  return (
    <ConditionalRender
      status={status}
      success={() =>
        getSeriesData ? (
          <SeriesSuccess getSeriesData={getSeriesData} />
        ) : (
          <SeriesFailure error={error} />
        )
      }
      failure={() => <SeriesFailure error={error} />}
    >
      <Spinner />
    </ConditionalRender>
  );
};

export default Series;
