import React from 'react';
import Spinner from 'src/components/Spinner';
import { ConditionalRender } from 'src/components/ConditionalRenderRQuery';
import { TVirtualMachinesProps } from './VirtualMachines.types';
import VirtualMachinesSuccess from './VirtualMachines.success';
import VirtualMachinesFailure from './VirtualMachines.failure';
import StandardContent from 'src/components/StandardContent';

// import Spinner from 'components/Spinner/SpinnerOnly.component';
// import { HiArrowLeft } from 'react-icons/hi';

const VirtualMachines: React.FC<TVirtualMachinesProps> = ({status, getAllVirtualMachinesData, error, userData}) => {

  return (
    <StandardContent title="Computational Resources">
      <ConditionalRender
        status={status}
        success={() =>
          <VirtualMachinesSuccess getAllVirtualMachinesData={getAllVirtualMachinesData} userData={userData} />
        }
        failure={() =>
          <VirtualMachinesFailure error={error} />
        }>
        <Spinner />
      </ConditionalRender>
    </StandardContent>
  );
};

export default VirtualMachines;
