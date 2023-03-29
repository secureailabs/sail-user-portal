export type TGetOrganizationSuccess = {
  name: string;
  description: string;
  avatar: string | any; // Should be string only in prod
  id: string;
};

export type TOrganizationSuccessProps = {
  organizationData: TGetOrganizationSuccess;
};
