/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataFederationProvisionState } from './DataFederationProvisionState';
import type { SecureComputationNodeSize } from './SecureComputationNodeSize';

export type RegisterDataFederationProvision_Out = {
  data_federation_id: string;
  secure_computation_nodes_size: SecureComputationNodeSize;
  _id: string;
  creation_time: string;
  organization_id: string;
  smart_broker_id: string;
  state: DataFederationProvisionState;
  secure_computation_nodes_id: Array<string>;
};
