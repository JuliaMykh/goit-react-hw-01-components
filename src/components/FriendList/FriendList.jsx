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
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};
