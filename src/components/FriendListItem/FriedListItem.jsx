
import PropTypes from "prop-types";
import { FriendItem, StatusFriend, Avatar, Name } from './FriendListItem.styled';



export const FriendListItem = ({avatar, name, isOnline }) => {
    return (
      <FriendItem >
        
  <StatusFriend isOnline={isOnline} />
  <Avatar src={avatar} alt="User avatar" width="48" />
            <Name >{name}</Name>
</FriendItem>
    );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired, 
  name: PropTypes.string.isRequired,
};
