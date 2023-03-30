/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import TimeAgo from 'javascript-time-ago';
import { Link } from 'react-router-dom';
import en from 'javascript-time-ago/locale/en.json';
import PatientSummary from 'src/components/PatientSummary';
import Feed from 'src/components/Feed';
import 'eqcss/EQCSS-polyfills';
import FeedComponent from 'src/components/Feed';
import GridLayout from 'react-grid-layout';
import StandardContent from 'src/components/StandardContent';
import Stats from 'src/components/Stats';
import { FaUsers } from 'react-icons/fa';
import { HiViewBoards } from 'react-icons/hi';
import { UserInfo_Out } from 'src/client';

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo('en');

const CustomizableDashboard: React.FC<{ userData: UserInfo_Out }> = ({
  userData
}) => {
  const stats = [
    {
      title: 'No. of Dataset Owners',
      Icon: HiViewBoards,
      value: '7'
    },
    {
      title: 'No. of Data Users',
      Icon: FaUsers,
      value: '13'
    }
  ];
  const current_time = new Date();
  const data_user_activity = [
    {
      title: (
        <>
          <Link to="/dashboard/organizations/uuid1" style={{ color: 'black' }}>
            Kidney Cancer Association
          </Link>{' '}
          performed computations on{' '}
          <Link to="/dashboard/datasets/uuid2" style={{ color: 'black' }}>
            The Kidney Cancer Association Research Consortium dataset
          </Link>
        </>
      ),
      date: timeAgo.format(new Date(current_time.getTime() - 1 * 86400000)),
      description: ''
    },
    {
      title: (
        <>
          <Link to="/dashboard/organizations/uuid1" style={{ color: 'black' }}>
            Kidney Cancer Association
          </Link>{' '}
          performed computations on{' '}
          <Link to="/dashboard/datasets/uuid2" style={{ color: 'black' }}>
            The Kidney Cancer Association Research Consortium dataset
          </Link>
        </>
      ),
      date: timeAgo.format(new Date(current_time.getTime() - 14 * 86400000)),
      description: ''
    }
  ];

  const layout = [
    { i: 'a', x: 0, y: 0, w: 8, h: 16, static: true },
    { i: 'b', x: 0, y: 17, w: 8, h: 5, static: true },
    { i: 'c', x: 8, y: 0, w: 3, h: 7, static: true },
    { i: 'd', x: 8, y: 7, w: 3, h: 5, static: true }
  ];
  if (userData?.role === 'ADMIN') {
    return (
      <div className="standard-content-scroll">
        <StandardContent title="Dashboard">
          <GridLayout
            className="layout"
            layout={layout}
            cols={12}
            width={1400}
            rowHeight={50}
          >
            <div key="a">
              <PatientSummary />
            </div>
            <div key="b">
              {/* <Feed containerHeight={true} limit={2} /> */}
              <Feed
                containerHeight={true}
                title="Data User Activity"
                secondary="Show all"
                feed={data_user_activity}
              />
            </div>

            <div key="d">
              <FeedComponent
                title="Data User Activity"
                secondary="Show all"
                feed={data_user_activity}
              />
            </div>
            <div key="c">
              <Stats
                title="Summary of Membership"
                containerHeight={true}
                stats={stats}
              />
            </div>
          </GridLayout>
        </StandardContent>
      </div>
    );
  } else {
    return (
      <StandardContent title="Dashboard">
        {/* @ts-ignore */}
        <></>
        {/* <Feed limit={5} /> */}
      </StandardContent>
    );
  }
};

export default CustomizableDashboard;
