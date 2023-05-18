import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListDot,
  ListImg,
  ListName,
  ListContainer,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ListContainer>
      <List>
        {friends.map(friend => (
          <ListItem key={friend.id}>
            <ListDot isOnline={friend.isOnline} />
            <ListImg src={friend.avatar} alt={friend.name} />
            <ListName>{friend.name}</ListName>
          </ListItem>
        ))}
      </List>
    </ListContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
