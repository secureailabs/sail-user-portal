/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataFederationProvisionState } from './DataFederationProvisionState';
import type { SecureComputationNodeSize } from './SecureComputationNodeSize';

export type GetDataFederationProvision = {
    data_federation_id: string;
    secure_computation_nodes_size: SecureComputationNodeSize;
    id: string;
    creation_time?: string;
    organization_id: string;
    secure_computation_node_id: string;
    state: DataFederationProvisionState;
};

