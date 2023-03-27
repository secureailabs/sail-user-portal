import type { IconType } from 'react-icons';

type TSidebarLink = {
  Icon: IconType;
  text: string;
  onClick?(): void;
  link?: string;
  exact?: boolean;
};

export default TSidebarLink;
