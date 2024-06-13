/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Transactions from '../components/Transactions';

function TransactionsPage() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <Transactions />
          </main>
        </div>
      </div>
    </>
  );
}

export default TransactionsPage;
