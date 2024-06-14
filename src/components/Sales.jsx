import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function Sales() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    // Fetch sales from API
    fetch('http://127.0.0.1:8000/sales')
      .then(response => response.json())
      .then(data => setSales(data))
      .catch(error => console.error('Error fetching sales:', error));
  }, []);

  return (
    <div>
      <h2>Sales</h2>
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
          {sales.map(sale => (
            <tr key={sale.id}>
              <td>{sale.id}</td>
              <td>{sale.date}</td>
              <td>{sale.product}</td>
              <td>{sale.quantity}</td>
              <td>{sale.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Sales;
