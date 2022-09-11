import styled from "@emotion/styled";

const SectionStat = styled.section`
    margin: 20px;
`;
const Title = styled.h2`
    text-transform: uppercase;
    color: rgb(35, 32, 32);
    margin-top: 50px;       
    margin-bottom: 15px;
    text-align: center;
`;
const StatList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 60px;
    padding: 20px;

    color: #fff;
    background-color: #ccc;
`;
const Lable = styled.span`
    font-size: 12px;
    margin-bottom: 10px;
`;

export { SectionStat, Title, StatList, StatItem, Lable};