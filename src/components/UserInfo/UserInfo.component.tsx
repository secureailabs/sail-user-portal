import React from 'react';

import Text from 'src/components/Text';

import type TUserInfo from './UserInfo.types';

const UserInfo: React.FC<TUserInfo> = ({
  username,
  organization,
  profile_image,
}) => {
  return (
    <div className="user-info">
      <img className="user-info__image" src={profile_image} />
      <div className="user-info__text">
        <Text lineHeight={4} fontWeight={500}>
          {username}
        </Text>
        <Text lineHeight={4} color="grey" fontSize="11px" fontWeight={500}>
          {organization}
        </Text>
      </div>
    </div>
  );
};

export default UserInfo;
