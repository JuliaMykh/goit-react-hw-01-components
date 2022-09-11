import styled from "@emotion/styled";

const FriendItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;
const StatusFriend = styled.span`
    display: block;
    width: 15px;
    height: 15px;
    margin-right: 20px;
    border-radius: 50%;
    background-color:${({ isOnline }) => {
    return isOnline ? 'green' : 'red';
    }
    }
   

`;
const Avatar = styled.img`
    padding: 15px;
    margin-right: 20px;
    border: 1px solid rgb(51, 48, 48);
`;
const Name = styled.p`
    font-size: 20px;
    font-weight: 700;
`;

export { FriendItem, Avatar, Name, StatusFriend};