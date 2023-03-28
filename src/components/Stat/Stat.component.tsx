import React from 'react';

import type TStat from './Stat.types';

import Text from 'src/components/Text';

import HighlightedValue from 'src/components/HighlightedValue';
import Margin from 'src/components/Margin';

const Stat: React.FC<TStat> = ({ title, value, Icon }) => {
  return (
    <div className="stat">
      <Text fontWeight={600} fontSize="12px">
        {title}
      </Text>
      <Margin size={3} />
      <Icon className="stat__icon" />
      <Margin size={3} />
      <HighlightedValue>{value}</HighlightedValue>
    </div>
  );
};

export default Stat;
