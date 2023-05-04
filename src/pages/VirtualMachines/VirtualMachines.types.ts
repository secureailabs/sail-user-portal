import { ApiError, GetMultipleSecureComputationNode_Out } from 'src/client';

export type TGetVirtualMachineStart = {
  secure_computation_node_id: string;
};

export type TVirtualMachinesFailureProps = {
  error: ApiError | null;
};

export type TVirtualMachinesSuccessProps = {
  getAllVirtualMachinesData: GetMultipleSecureComputationNode_Out | undefined;
  refetch: () => void;
};
