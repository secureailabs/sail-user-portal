import React from 'react';
import StandardContent from 'src/components/StandardContent';
import { TDataModelSuccessProps } from './DataModel.types';
import DataFrame from './DataFrame';

const DataModelSuccess: React.FC<TDataModelSuccessProps> = ({
  getDataModelData
}) => {
  return (
    <div>
      <StandardContent title={getDataModelData.name}>
        <>
          {getDataModelData.data_model_dataframes.map((dataframe_id) => (
            <DataFrame dataframe_id={dataframe_id} />
          ))}
        </>
      </StandardContent>
    </div>
  );
};

export default DataModelSuccess;
