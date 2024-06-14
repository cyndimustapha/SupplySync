import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function Purchases() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    // Fetch purchases from API
    fetch('http://localhost:8000/purchases')
      .then(response => response.json())
      .then(data => setPurchases(data))
      .catch(error => console.error('Error fetching purchases:', error));
  }, []);

  return (
    <div>
      <h2>Purchases</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map(purchase => (
            <tr key={purchase.id}>
              <td>{purchase.id}</td>
              <td>{purchase.date}</td>
              <td>{purchase.product}</td>
              <td>{purchase.quantity}</td>
              <td>{purchase.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Purchases;
