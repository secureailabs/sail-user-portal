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
import { FaServer } from 'react-icons/fa';
import DashboardRouter from 'src/routes/Dashboard.routes';
import Sidebar from 'src/layout/Sidebar';
import Header from 'src/components/Header';
import BreadcrumbRoutes from 'src/routes/Breadcrumbs/breadcrumbs.routes';
import { TDashboardProps } from './Dashboard.types';
// @ts-ignore
import default_profile_image from '../../assets/user.png';
// @ts-ignore
import newLogo from '../../assets/newLogo.png';

const Dashboard: React.FC<TDashboardProps> = ({
  userData,
  logoutMutationFunction
}) => {
  const primary: any[] = [
    { text: 'Dashboard', Icon: MdDashboard, link: '/dashboard', exact: true },
    // { text: 'Data Federation', Icon: FaServer, link: '/dashboard/federation' },
    { text: 'My Datasets', Icon: MdViewColumn, link: '/dashboard/datasets' },
    // {
    //   text: 'My DataModels',
    //   Icon: MdViewColumn,
    //   link: '/dashboard/data-models'
    // },
    {
      text: 'Researcher Portal',
      Icon: HiOutlineDesktopComputer,
      link: '/dashboard/researcher-portal'
    }
  ];

  const secondary: any[] = [
    {
      text: 'Logout',
      Icon: MdLogout,
      onClick: () => {
        logoutMutationFunction();
      }
    },
    {
      text: 'Downloads',
      Icon: MdSystemUpdateAlt,
      link: '/dashboard/downloads'
    },
    {
      text: 'Documentation',
      Icon: MdOutlineDocumentScanner,
      link: '/dashboard/documentation'
    },
    {
      text: 'Settings',
      Icon: MdSettings,
      link: '/dashboard/settings'
    },
    {
      text: 'My Organization',
      Icon: MdOutlinePeopleAlt,
      link: '/dashboard/my-organization'
    },
    {
      text: 'Help',
      Icon: MdHelpOutline,
      link: '/dashboard/help'
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
