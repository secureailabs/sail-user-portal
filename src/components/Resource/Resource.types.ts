import { IconType } from 'react-icons';

type TResource = {
  Icon: IconType;
  primaryText: string;
  secondaryText?: string;
  buttonText?: string;
  buttonOnClickUrl?: string;
  tileOnClick?: () => void;
};

export default TResource;
