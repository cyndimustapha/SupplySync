/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch("http://127.0.0.1:8000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  };

  const handleEditProduct = (productId, updatedProductData) => {
    fetch(`http://127.0.0.1:8000/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProductData),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedProducts = products.map((product) =>
          product.id === productId ? { ...product, ...updatedProductData } : product
        );
        setProducts(updatedProducts);
      })
      .catch((error) => console.error("Error editing product:", error));
  };

  const handleDeleteProduct = (productId) => {
    fetch(`http://127.0.0.1:8000/products/${productId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setProducts(products.filter((product) => product.id !== productId));
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  const refreshProducts = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <div style={{ width: "250px", minWidth: "250px", backgroundColor: "#f8f9fa" }}>
          <Sidebar />
        </div>
        <main role="main" style={{ flexGrow: 1, padding: "1rem", color: "black" }}>
          <ProductList
            products={products}
            onAddProductClick={() => setShowForm(true)}
            onEditProduct={handleEditProduct}
            onDeleteProduct={handleDeleteProduct}
          />
          {showForm && (
            <ProductForm onClose={() => setShowForm(false)} refreshProducts={refreshProducts} />
          )}
        </main>
      </div>
    </>
  );
}

export default ProductsPage;
