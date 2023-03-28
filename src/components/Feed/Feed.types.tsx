import type { TFeedItem } from './FeedItem';

type TFeed = {
  feed: TFeedItem[];
  title: string;
  secondary: string;
  containerHeight?: boolean;
};

export default TFeed;
