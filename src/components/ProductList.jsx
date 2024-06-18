/* eslint-disable react/prop-types */

import React from "react";
import { Table, Button, Modal } from "react-bootstrap";

const ProductList = ({
  products,
  onAddProductClick,
  onEditProduct,
  onDeleteProduct,
}) => {
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [selectedProductId, setSelectedProductId] = React.useState(null);

  const handleEditClick = (productId) => {
    onEditProduct(productId);
  };

  const handleDeleteClick = (productId) => {
    setSelectedProductId(productId);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    onDeleteProduct(selectedProductId);
    setShowDeleteModal(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <div>
      <h2>Products</h2>
      <Button variant="primary" className="mb-3" onClick={onAddProductClick}>
        Add Product
      </Button>
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.sku}</td>
              <td>{product.description}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>{product.supplier}</td>
              <td>
                <Button
                  variant="warning"
                  className="mr-2"
                  onClick={() => handleEditClick(product.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteClick(product.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showDeleteModal} onHide={handleCancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductList;
