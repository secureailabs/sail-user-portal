/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import OrganizationSuccess from './Organization.success';
import StandardContent from 'src/components/StandardContent';
import { useQuery } from 'react-query';
import Spinner from 'src/components/Spinner';
import { DefaultService } from 'src/client';
import { UserInfo_Out } from 'src/client';
import { useQueryClient } from 'react-query';

const Organization: React.FC = () => {
  const queryClient = useQueryClient();
  const currentUser: UserInfo_Out = queryClient.getQueryData('userData')!;

  const { data, status } = useQuery('my-organization', () =>
    DefaultService.getOrganization(currentUser.organization.id).then(
      (res) => res
    )
  );
  if (status === 'loading') {
    return <Spinner />;
  }
  console.log('DATA', data);
  return (
    <StandardContent title="Organization">
      {/* @ts-ignore */}
      <OrganizationSuccess organizationData={data} />
    </StandardContent>
  );
};

export default Organization;
