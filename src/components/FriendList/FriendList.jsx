import PropTypes from "prop-types";
import { FriendListItem } from "../FriendListItem/FriedListItem";
import { ListFr } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    // console.log(friends);
    return (
        <ListFr >
            {friends.map(({ id, isOnline, avatar, name }) => (
            <FriendListItem
            key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
            />
            )         
            )}
        </ListFr>
    );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
