/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const fetchProducts = () => {
    // Fetch products from API
    fetch('http://127.0.0.1:8000/products')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProducts(data)
      })
      .catch(error => console.error('Error fetching products:', error));

  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <div style={{ width: '250px', minWidth: '250px', backgroundColor: '#f8f9fa' }}>
          <Sidebar />
        </div>
        <main role="main" style={{ flexGrow: 1, padding: '1rem', color: 'black' }}>
          <ProductList products={products} onAddProductClick={() => setShowForm(true)} />
          {showForm && <ProductForm onClose={() => setShowForm(false)} refreshProducts={fetchProducts} />}
        </main>
      </div>
    </>
  );
}

export default ProductsPage;
