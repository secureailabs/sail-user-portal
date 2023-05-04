import React from 'react';

import { TVirtualMachinesFailureProps } from './VirtualMachines.types';
import Text from 'src/components/Text';

const VirtualMachinesFailure: React.FC<TVirtualMachinesFailureProps> = () => {
  return (
    <Text>
      There was an error fetching secure computation nodes. Please try again
      later.
    </Text>
  );
};

export default VirtualMachinesFailure;
