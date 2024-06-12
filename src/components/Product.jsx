import { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <Button variant="primary" className="mb-3">Add Product</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>SKU</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.sku}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <Button variant="warning" className="mr-2">Edit</Button>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Products;
