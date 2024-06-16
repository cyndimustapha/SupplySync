/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TransactionList from '../components/TransactionList';

function TransactionsPage() {
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
          <TransactionList />
        </main>
      </div>
    </>
  );
}

export default TransactionsPage;
