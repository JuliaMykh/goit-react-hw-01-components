import PropTypes from "prop-types";

import { TransactionTable, TransactionThead, TransactionTr } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
    return (
        <TransactionTable >
      <TransactionThead>
        <TransactionTr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TransactionTr>
      </TransactionThead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionTr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </TransactionTr>
        ))}
      </tbody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};