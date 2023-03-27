import { ReactElement } from 'react';
import type { TSidebar } from 'src/components/Sidebar';

type TSidebarLayout = TSidebar & {
  children: ReactElement;
};

export default TSidebarLayout;
