
import PropTypes from "prop-types";
import {
    ProfileContainer,
    DescriptionContainer,
    Avatar,
    NameUser,
    Tag,
    Location,
    StatsContainer,
    StatsItem,
    Label,
    Quantity
} from './Profile.styled';
 
export const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats }) => {
    return (<ProfileContainer>
        <DescriptionContainer >
            <Avatar
                src={avatar}
                alt="User avatar"

           />
            <NameUser >{username}</NameUser>
            <Tag >@{tag}</Tag>
            <Location >{location}</Location>
        </DescriptionContainer>

        <StatsContainer>
            <StatsItem >
                <Label >Followers</Label>
                <Quantity >{stats.followers}</Quantity>
            </StatsItem>
            <StatsItem >
                <Label >Views</Label>
                <Quantity >{stats.views}</Quantity>
            </StatsItem>
            <StatsItem >
                <Label >Likes</Label>
                <Quantity >{stats.likes}</Quantity>
            </StatsItem>
        </StatsContainer>
    </ProfileContainer>
    );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};