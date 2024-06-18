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
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  };

  const handleEditProduct = (productId, updatedProductData) => {
    console.log(`Editing product with ID: ${productId}`);
    fetch(`http://127.0.0.1:8000/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProductData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Product updated successfully:", data);
        // Update the products list with the updated product
        const updatedProducts = products.map((product) =>
          product.id === productId
            ? { ...product, ...updatedProductData }
            : product
        );
        setProducts(updatedProducts);
      })
      .catch((error) => console.error("Error editing product:", error));
  };

  const handleDeleteProduct = (productId) => {
    console.log(`Deleting product with ID: ${productId}`);
    fetch(`http://127.0.0.1:8000/products/${productId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Product deleted successfully:", data);
        setProducts(products.filter((product) => product.id !== productId));
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "250px",
            minWidth: "250px",
            backgroundColor: "#f8f9fa",
          }}
        >
          <Sidebar />
        </div>
        <main
          role="main"
          style={{ flexGrow: 1, padding: "1rem", color: "black" }}
        >
          <ProductList
            products={products}
            onAddProductClick={() => setShowForm(true)}
            onEditProduct={handleEditProduct}
            onDeleteProduct={handleDeleteProduct}
          />
          {showForm && (
            <ProductForm
              onClose={() => setShowForm(false)}
              refreshProducts={fetchProducts}
            />
          )}
        </main>
      </div>
    </>
  );
}

export default ProductsPage;
