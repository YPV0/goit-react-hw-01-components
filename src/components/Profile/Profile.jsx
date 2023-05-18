import React from 'react';
import {
  ProfileCard,
  ProfileImg,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileFooter,
  ProfileStats,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <ProfileImg src={avatar} alt={username} />
      <ProfileName>{username}</ProfileName>
      <ProfileTag>@{tag}</ProfileTag>
      <ProfileLocation>{location}</ProfileLocation>
      <ProfileFooter>
        <ProfileStats>
          <p>Followers:</p>
          {stats.followers}
        </ProfileStats>
        <ProfileStats>
          <p>Likes:</p>
          {stats.likes}
        </ProfileStats>

        <ProfileStats>
          <p>Views:</p>
          {stats.views}
        </ProfileStats>
      </ProfileFooter>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
