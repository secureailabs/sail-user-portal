import React from 'react';
import Series from 'src/pages/DataModels/Series';
import { TDataFrameSuccessProps } from './DataFrame.types';
import Accordion from 'src/components/Accordion';

const DataFrameSuccess: React.FC<TDataFrameSuccessProps> = ({
  getDataFrameData
}) => {
  return (
    <Accordion
      title={getDataFrameData.name}
      description={getDataFrameData.description}
    >
      <>
        {getDataFrameData.data_model_series.map((series_id) => (
          <Series key={series_id} series_id={series_id} />
        ))}
      </>
    </Accordion>
  );
};

export default DataFrameSuccess;
