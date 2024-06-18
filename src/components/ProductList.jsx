/* eslint-disable react/prop-types */
import { Table, Button } from 'react-bootstrap';

function ProductList({ products, onAddProductClick }) {

  console.log(products)
  
  return (
    <div>
      <h2>Products</h2>
      <Button variant="primary" className="mb-3" onClick={onAddProductClick}>Add Product</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>SKU</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.sku}</td>
              <td>{product.description}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>{product.supplier}</td>
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

export default ProductList;
