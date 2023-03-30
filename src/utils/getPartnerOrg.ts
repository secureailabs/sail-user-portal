import { UserInfo_Out } from 'src/client';

const getPartnerOrg = (
  userData: UserInfo_Out,
  dataOwnerOrganization: string,
  DOOName: string,
  ROName: string
): string => {
  return userData?.organization.name == dataOwnerOrganization
    ? ROName
    : DOOName;
};

export default getPartnerOrg;
