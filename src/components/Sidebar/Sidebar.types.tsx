import type TSidebarLink from './SidebarLink/SidebarLink.types';

type TSidebar = {
  primary: TSidebarLink[];
  secondary: TSidebarLink[];
  logo: string;
};

export default TSidebar;
