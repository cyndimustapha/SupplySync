import { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ProductForm({ onClose, refreshProducts }) {
  const [name, setName] = useState('');
  const [sku, setSku] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [supplier, setSupplier] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !sku || !description || !quantity || !price || !supplier) {
      setError('All fields are required');
      return;
    }
    const newProduct = { name, sku, description, quantity, price, supplier };
    fetch('http://127.0.0.1:8000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then(response => response.json())
      .then(data => {
        refreshProducts(data);
        onClose();
      })
      .catch(error => console.error('Error creating product:', error));
  };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formSku">
            <Form.Label>SKU</Form.Label>
            <Form.Control type="text" value={sku} onChange={(e) => setSku(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formQuantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formSupplier">
            <Form.Label>Supplier</Form.Label>
            <Form.Control type="text" value={supplier} onChange={(e) => setSupplier(e.target.value)} />
          </Form.Group>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Button variant="primary" type="submit">Add Product</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

ProductForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  refreshProducts: PropTypes.func.isRequired,
};

export default ProductForm;
