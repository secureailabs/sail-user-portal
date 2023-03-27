import React from 'react';
import SearchBar from 'src/components/SearchBar';
import UserInfo from 'src/components/UserInfo';

import THeader from './Header.types';

const Header: React.FC<THeader> = ({
  search,
  username,
  organization,
  profile_image,
}) => {
  return (
    <div className="header">
      <SearchBar search={search} />
      <UserInfo
        username={username}
        organization={organization}
        profile_image={profile_image}
      />
    </div>
  );
};

export default Header;
