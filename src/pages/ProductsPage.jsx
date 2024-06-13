/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Product from '../components/Products';

function ProductsPage() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <Product />
          </main>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
