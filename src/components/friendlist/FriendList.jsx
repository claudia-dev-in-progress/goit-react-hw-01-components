import PropTypes from "prop-types";
import { FriendListItem } from "./FriendListItem";
import "./friendlist.css";

export const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map((friend) => (
      <FriendListItem
        name={friend.name}
        avatar={friend.avatar}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
