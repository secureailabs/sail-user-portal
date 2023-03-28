import React from 'react';

import Stat from 'src/components/Stat';
import Card from 'src/components/Card';
import TStats from './Stats.types';

const Stats: React.FC<TStats> = ({
  stats,
  title,
  secondary,
  containerHeight,
  widthMaxContent,
}) => {
  return (
    <Card
      primaryText={title}
      secondaryText={secondary}
      widthMaxContent={widthMaxContent}
      containerHeight={containerHeight}
    >
      <div className="stats">
        {stats.map(({ title: feed_title, value, Icon }, index) => (
          <Stat title={feed_title} value={value} Icon={Icon} key={index} />
        ))}
      </div>
    </Card>
  );
};

export default Stats;
