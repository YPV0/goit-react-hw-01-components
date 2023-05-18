import React from 'react';
import { Profile } from './Profile/Profile';

import user from 'data/user.json';
import data from 'data/data.json';
import Stats from './stats/stats';
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Stats title="Upload stats" info={data} />
    </>
  );
};
