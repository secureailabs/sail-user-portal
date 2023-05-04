import React from 'react';
import Spinner from 'src/components/Spinner';
import { ConditionalRender } from 'src/components/ConditionalRenderRQuery';
import VirtualMachinesSuccess from './VirtualMachines.success';
import VirtualMachinesFailure from './VirtualMachines.failure';
import StandardContent from 'src/components/StandardContent';
import {
  DefaultService,
  GetMultipleSecureComputationNode_Out,
  ApiError
} from 'src/client';
import { useQuery } from 'react-query';

const VirtualMachines: React.FC = () => {
  const { data, isLoading, status, error, refetch } = useQuery<
    GetMultipleSecureComputationNode_Out,
    ApiError
  >(['virtualmachines'], DefaultService.getAllSecureComputationNodes, {
    refetchOnMount: 'always'
  });

  return (
    <StandardContent title="Computational Resources">
      <ConditionalRender
        status={status}
        success={() => (
          <VirtualMachinesSuccess
            getAllVirtualMachinesData={data}
            refetch={refetch}
          />
        )}
        failure={() => <VirtualMachinesFailure error={error} />}
      >
        <Spinner />
      </ConditionalRender>
    </StandardContent>
  );
};

export default VirtualMachines;
