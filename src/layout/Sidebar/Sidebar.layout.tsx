import React from 'react';

import type TSidebarLayout from './Sidebar.types';

import Sidebar from 'src/components/Sidebar';

const SidebarLayout: React.FC<TSidebarLayout> = ({
  primary,
  secondary,
  children,
  logo
}) => {
  return (
    <div className="sidebar-layout">
      <Sidebar logo={logo} primary={primary} secondary={secondary} />
      {children}
    </div>
  );
};

export default SidebarLayout;
