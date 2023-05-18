import styled from 'styled-components';

const TransactionsTable = styled.table`
  border-collapse: collapse;
  width: 300px;
  margin: 0 auto;
  border: 1px solid #ccc;
`;

const TableHead = styled.thead`
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
  text-align: left;
  text-align: left;
  padding: 10px;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  padding: 10px;
  &:nth-child(even) {
    background-color: #f8f8f8;
  }
  &:nth-child(odd) {
    background-color: #fff;
  }
`;

const Th = styled.th`
  padding: 10px;
  padding: 10px;
  text-align: left;
`;

const TableBody = styled.tbody`
  text-align: left;
  padding: 10px;
  padding: 10px;
`;

const Td = styled.td`
  padding: 10px;
  padding: 10px;
  text-align: left;
`;

export { TransactionsTable, TableHead, TableRow, Th, TableBody, Td };
