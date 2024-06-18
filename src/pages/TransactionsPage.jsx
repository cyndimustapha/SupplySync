/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TransactionList from '../components/TransactionList';
import TransactionForm from '../components/TransactionForm';

function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const [showForm, setShowForm] = useState(false); // State to manage form visibility

  const fetchTransactions = () => {
    // Fetch transactions from API
    fetch('http://127.0.0.1:8000/transactions')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched transactions:', data);
        setTransactions(data);
      })
      .catch(error => console.error('Error fetching transactions:', error));
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const containerStyle = {
    display: 'flex',
  };

  const sidebarStyle = {
    width: '250px',
    minWidth: '250px',
    backgroundColor: '#f8f9fa',
  };

  const mainContentStyle = {
    flexGrow: 1,
    padding: '1rem',
  };

  return (
    <>
      <Header />
      <div style={containerStyle}>
        <div style={sidebarStyle}>
          <Sidebar />
        </div>
        <main role="main" style={mainContentStyle}>
          <TransactionList transactions={transactions} onAddTransactionClick={() => setShowForm(true)} />
          {showForm && <TransactionForm onClose={() => setShowForm(false)} refreshTransactions={fetchTransactions} />}
        </main>
      </div>
    </>
  );
}

export default TransactionsPage;
