import PropTypes from "prop-types";

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li class="list-item">
    <div class={isOnline === true ? "online" : "offline"}></div>
    <img class="avatar" src={avatar} alt="User avatar" width="48" />
    <p class="friend-name">{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
