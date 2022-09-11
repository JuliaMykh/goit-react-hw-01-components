import styled from "@emotion/styled";

const ProfileContainer = styled.div`
    display: flex;
        flex-direction: column;
        align-items: center;
    
        width: 250px;
    
        border: 1px solid #e9eef3;
        border-radius: 5px;
        box-shadow: 3px 3px 3px 3px rgba(174, 168, 168, 0.75);

        margin: 0 auto;
`;
const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    color: #000000;
`;
const Avatar = styled.img`
    border: 3px solid #e9eef3;
    border-radius: 50%;

    margin-top: 30px;
    margin-bottom: 30px;

    width: 150px;
    height: 150px;
`;
const NameUser = styled.p`
    font-weight: 700;
    text-transform: uppercase;

    margin-bottom: 10px;
`;
const Tag = styled.p`
    margin-bottom: 10px;
    color: #4c8fd1;
`;
const Location = styled.p`
    margin-bottom: 30px;
    color: #4c8fd1;
`;
const StatsContainer = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;

    width: 100%;

    border-top: 1px solid #dddddd;
    background-color: #b2cfed;
`;
const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 15px;

    border-right: 1px solid #dddddd;

    &:last-child {
    border-right: none;
}
`;
const Label = styled.span`
    font-size: 12px;
    margin-bottom: 5px;
`;
const Quantity = styled.span`
    font-weight: 700;
`;

export {
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
};




