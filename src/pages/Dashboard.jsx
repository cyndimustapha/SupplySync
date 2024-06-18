/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Alert } from "react-bootstrap";

function Dashboard() {
  //styling
  const containerStyle = {
    display: "flex",
  };

  const sidebarStyle = {
    width: "250px", // Fixed width for the sidebar
    minWidth: "250px",
    backgroundColor: "#f8f9fa",
  };

  const mainContentStyle = {
    flexGrow: 1, // Takes the remaining width
    padding: "1rem",
    fontFamily: "Times New Roman, Times, serif",
  };

  const [lowStockProducts, setLowStockProducts] = useState([]);

  useEffect(() => {
    // Fetch low stock products
    fetch("http://127.0.0.1:8000/low_stock?threshold=10")
      .then((response) => response.json())
      .then((data) => setLowStockProducts(data))
      .catch((error) =>
        console.error("Error fetching low stock products:", error)
      );
  }, []);

  return (
    <>
      <Header />
      <div style={containerStyle}>
        <div style={sidebarStyle}>
          <Sidebar />
        </div>
        <main role="main" style={mainContentStyle}>
          <h2>Dashboard</h2>
          {lowStockProducts.length > 0 && (
            <Alert variant="warning">
              The following products have low stock:
              <ul>
                {lowStockProducts.map((product) => (
                  <li key={product.id}>
                    {product.name} (Quantity: {product.quantity})
                  </li>
                ))}
              </ul>
            </Alert>
          )}
        </main>
      </div>
    </>
  );
}

export default Dashboard;
