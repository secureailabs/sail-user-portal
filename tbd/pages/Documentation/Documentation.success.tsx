import React from 'react';
import { useNavigate } from 'react-router';
import { TDocumentationSuccessProps } from './Documentation.types';

import StandardContent from 'web-ui/components/StandardContent';
import Resource from 'web-ui/components/Resource'
import Text from 'web-ui/components/Text'

const Documentationuccess: React.FC<TDocumentationSuccessProps> = ({
    getAllDocumentationData,
}) => {
  const navigate = useNavigate();

  // Get all the documentation using the documentation information api and create a list of Resource components
  const documentation_list = getAllDocumentationData.map((documentation) => {
    return (
      <Resource
        key={documentation.id}
        Icon={documentation.icon}
        primaryText={documentation.primaryText}
        secondaryText={documentation.secondaryText}
        tileOnClick={() => navigate(`/dashboard/documentation/#`)}
      />
    );
  });

  return (
    <StandardContent title="Documentation">
          <>
            <Text
              fontStyle="normal"
              lineHeight={5}
              textAlign="left"
              fontWeight={600}
              fontSize="16px"
            >
              For Data Owners:
            </Text>
          <div className='downloads-list'>
            {documentation_list}
          </div>
          </>
    </StandardContent>
  );
};

export default Documentationuccess;
