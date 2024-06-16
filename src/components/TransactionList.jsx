import { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import TransactionForm from './TransactionForm'; // Import the TransactionForm component

function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [showForm, setShowForm] = useState(false); // State to manage form visibility

  useEffect(() => {
    // Fetch transactions from API
    fetch('http://127.0.0.1:8000/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);

  return (
    <div>
      <h2>Transactions</h2>
      <Button variant="primary" className="mb-3" onClick={() => setShowForm(true)}>Add Transaction</Button>
      {showForm && <TransactionForm onClose={() => setShowForm(false)} />} {/* Render form conditionally */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product ID</th>
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
              <td>{transaction.product_id}</td>
              <td>{transaction.quantity}</td>
              <td>{transaction.transaction_type}</td>
              <td>{transaction.date}</td>
              <td>{transaction.total_amount}</td>
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
