import React from 'react';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import items from 'data/transactions.json';

import { Profile } from './Profile/Profile';
import Stats from './stats/stats';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

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

      <FriendList friends={friends} />

      <TransactionHistory items={items} />
    </>
  );
};
