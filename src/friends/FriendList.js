import "./FriendList.css";
import PropTypes from "prop-types";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="item">
      <span className="status">{isOnline ? "Online" : "Offline"}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendList;
