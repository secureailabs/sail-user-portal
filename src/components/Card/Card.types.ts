import { ReactElement } from 'react';

type TCard = {
  primaryText: string;
  secondaryText?: string;
  secondaryTextOnClick?(): void;
  secondaryTextColor?: string;
  children?: ReactElement;
  containerHeight?: boolean;
  widthMaxContent?: boolean;
};

export default TCard;
