import React from 'react';
import SidebarLink from './SidebarLink';

import type TSidebar from './Sidebar.types';

const Sidebar: React.FC<TSidebar> = ({ primary, secondary, logo }) => {
  return (
    <div className="sidebar">
      <img src={logo} className="sidebar__logo" />
      <div className="sidebar__primary">
        {primary.map((props, index) => (
          <SidebarLink {...props} key={index} />
        ))}
      </div>

      <div className="sidebar__secondary">
        {secondary.map((props, index) => (
          <SidebarLink {...props} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
