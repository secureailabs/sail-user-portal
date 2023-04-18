import React from 'react';
import { TSeriesSuccessProps } from './Series.types';
import Accordion from 'src/components/Accordion';

const SeriesSuccess: React.FC<TSeriesSuccessProps> = ({ getSeriesData }) => {
  return (
    <Accordion title={getSeriesData.name} description="Series Description">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
        ex, sit amet blandit leo lobortis eget.
      </div>
    </Accordion>
  );
};

export default SeriesSuccess;
