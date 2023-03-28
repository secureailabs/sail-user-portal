import type TStat from 'src/components/Stat/Stat.types';

type TFeed = {
  stats: TStat[];
  title: string;
  secondary?: string;
  containerHeight?: boolean;
  widthMaxContent?: boolean;
};

export default TFeed;
