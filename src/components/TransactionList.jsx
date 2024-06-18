/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Table, Button } from 'react-bootstrap';

function TransactionList({ transactions, onAddTransactionClick }) {

  return (
    <div>
      <h2>Transactions</h2>
      <Button variant="primary" className="mb-3" onClick={onAddTransactionClick}>Add Transaction</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Quantity</th>
            <th>Transaction Type</th>
            <th>Date</th>
            <th>Total Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.quantity}</td>
              <td>{transaction.type}</td>
              <td>{transaction.date}</td>
              <td>{transaction.total_price}</td>
              <td>
                <Button variant="warning" className="mr-2">Edit</Button>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TransactionList;
