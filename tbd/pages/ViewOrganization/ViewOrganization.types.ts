import { TGetOrganizationSuccess } from 'APIs/organization/organization.typeDefs';
import { AxiosError } from 'axios';

export type TViewOrganizationProps = null;

export type TDataFederationError = {
  error: AxiosError<any> | null;
};

export type TViewOrganizationSuccessProps = {
  getOrganizationData: TGetOrganizationSuccess;
};
