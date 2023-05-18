import React from 'react';
import PropTypes from 'prop-types';
import {
  TransactionsTable,
  TableHead,
  TableRow,
  Th,
  TableBody,
  Td,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => (
  <TransactionsTable>
    <TableHead>
      <TableRow>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
      </TableRow>
    </TableHead>
    <TableBody>
      {items.map(item => (
        <TableRow key={item.id}>
          <Td>{item.type}</Td>
          <Td>{item.amount}</Td>
          <Td>{item.currency}</Td>
        </TableRow>
      ))}
    </TableBody>
  </TransactionsTable>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
