import React from 'react';
import {
  MdDashboard,
  MdViewColumn,
  MdSettings,
  MdHelpOutline,
  MdLogout,
  MdSystemUpdateAlt,
  MdOutlineDocumentScanner,
  MdOutlinePeopleAlt
} from 'react-icons/md';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import DashboardRouter from 'src/routes/Dashboard.routes';
import Sidebar from 'src/layout/Sidebar';
import Header from 'src/components/Header';
import BreadcrumbRoutes from 'src/routes/Breadcrumbs/breadcrumbs.routes';
import { TDashboardProps } from './Dashboard.types';
// @ts-ignore
import default_profile_image from '../../assets/user.png';
// @ts-ignore
import newLogo from '../../assets/newLogo.png';
import { UserRole } from 'src/client';
import { FaServer } from 'react-icons/fa';

const Dashboard: React.FC<TDashboardProps> = ({
  userData,
  logoutMutationFunction
}) => {
  const primary: any[] = [
    // { text: 'Dashboard', Icon: MdDashboard, link: '/dashboard', exact: true },
    // { text: 'Data Federation', Icon: FaServer, link: '/dashboard' },
    {
      text: 'DataModel',
      Icon: MdViewColumn,
      link: '/dashboard/data-models'
    }
  ];

  if (userData.roles.includes(UserRole.DATA_SUBMITTER)) {
    primary.push({
      text: 'My Datasets',
      Icon: MdViewColumn,
      link: '/dashboard/datasets'
    });
  }

  if (userData.roles.includes(UserRole.RESEARCHER)) {
    primary.push({
      text: 'Researcher Portal',
      Icon: HiOutlineDesktopComputer,
      link: '/dashboard/researcher-portal'
    });
  }

  const secondary: any[] = [
    // {
    //   text: 'Downloads',
    //   Icon: MdSystemUpdateAlt,
    //   link: '/dashboard/downloads'
    // },
    // {
    //   text: 'Documentation',
    //   Icon: MdOutlineDocumentScanner,
    //   link: '/dashboard/documentation'
    // },
    // {
    //   text: 'Settings',
    //   Icon: MdSettings,
    //   link: '/dashboard/settings'
    // },
    // {
    //   text: 'My Organization',
    //   Icon: MdOutlinePeopleAlt,
    //   link: '/dashboard/my-organization'
    // },
    // {
    //   text: 'Help',
    //   Icon: MdHelpOutline,
    //   link: '/dashboard/help'
    // },
    {
      text: 'Logout',
      Icon: MdLogout,
      onClick: () => {
        logoutMutationFunction();
      }
    }
  ];

  return (
    <Sidebar primary={primary} secondary={secondary} logo={newLogo}>
      <div className="standard-grid-row">
        <Header
          search={() => {
            return null;
          }}
          username={userData?.name}
          profile_image={default_profile_image}
          organization={userData?.organization.name}
        />
        <div>
          <BreadcrumbRoutes />
          <DashboardRouter />
        </div>
      </div>
    </Sidebar>
  );
};

export default Dashboard;
