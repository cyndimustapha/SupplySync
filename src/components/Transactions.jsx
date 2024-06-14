import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transactions from API
    fetch('http://localhost:8000/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);

  return (
    <div>
      <h2>Transactions</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.details}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Transactions;
