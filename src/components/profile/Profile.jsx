import PropTypes from "prop-types";
import "./profile.css";

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <div class="profile">
    <div class="description">
      <img src={avatar} alt="User avatar" class="avatar" />
      <p class="name">{username}</p>
      <p class="tag">@{tag}</p>
      <p class="location">{location}</p>
    </div>

    <ul class="profile-stats">
      <li class="profile-statistics">
        <span class="label">Followers</span>
        <span class="quantity">{stats.followers}</span>
      </li>
      <li class="profile-statistics">
        <span class="label">Views</span>
        <span class="quantity">{stats.views}</span>
      </li>
      <li class="profile-statistics">
        <span class="label">Likes</span>
        <span class="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
