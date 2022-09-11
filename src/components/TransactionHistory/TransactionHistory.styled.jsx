import styled from "@emotion/styled";

const TransactionTable = styled.table`
    width: 100%;
    margin-top: 50px;
    border: 2px dotted rgb(28, 1, 15);
`;
const TransactionThead = styled.thead`
    background-color: #940d59;
    color: #ffffff;
`;
const TransactionTr = styled.tr`
    text-align: center;
    height: 30px;
    &:nth-of-type(even){
         background-color: #e7ead1;
    }
`;

export { TransactionTable, TransactionThead, TransactionTr };