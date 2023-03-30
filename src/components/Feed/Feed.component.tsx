import React from 'react';

import FeedItem from './FeedItem';
import Card from 'src/components/Card';
import TFeed from './Feed.types';

const Feed: React.FC<TFeed> = ({ feed, title, secondary, containerHeight }) => {
  return (
    <Card
      primaryText={title}
      secondaryText={secondary}
      containerHeight={containerHeight}
    >
      <div className="feed">
        {feed.map(
          (
            {
              title: feed_title,
              description,
              image,
              date,
              onClick,
              avatar,
              avatar_color
            },
            index
          ) => (
            <FeedItem
              title={feed_title}
              description={description}
              onClick={onClick}
              image={image}
              date={date}
              avatar={avatar}
              avatar_color={avatar_color}
              key={index}
            />
          )
        )}
      </div>
    </Card>
  );
};

export default Feed;
