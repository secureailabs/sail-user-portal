import React from 'react';
import StandardContent from 'src/components/StandardContent';
import Card from 'src/components/Card';
import { TDataModelSuccessProps } from './DataModel.types';
import Text from 'src/components/Text';

const DataModelSuccess: React.FC<TDataModelSuccessProps> = ({
  getDataModelData
}) => {
  return (
    <div>
      <StandardContent title={getDataModelData?.name}>
        <Card primaryText="">
          <Text>Jaap Put your components here</Text>
        </Card>
      </StandardContent>
    </div>
  );
};

export default DataModelSuccess;
