import React from 'react';
import { GetOrganizations_Out } from 'src/client';
import UpdateOrganization from 'src/components/Organization/UpdateOrganization';

const OrganizationSuccess: React.FC<GetOrganizations_Out> = (organizationData) => {
  return (
      <UpdateOrganization organizationData={organizationData} />
  );
};

export default OrganizationSuccess;
