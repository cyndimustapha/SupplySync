import { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import PropTypes from "prop-types";

const ProductList = ({ products, onAddProductClick, onEditProduct, onDeleteProduct }) => {
  const [showProductModal, setShowProductModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleViewDetails = (productId) => {
    setSelectedProductId(productId);
    setShowProductModal(true);
  };

  const handleCloseModal = () => {
    setShowProductModal(false);
    setSelectedProductId(null);
  };

  return (
    <div className="container-fluid py-4">
      <h2 className="mb-4">Products</h2>
      <Button variant="primary" className="mb-3" onClick={onAddProductClick}>
        Add Product
      </Button>

      <Table striped bordered hover responsive className="mb-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>
                <Button
                  variant="info"
                  size="sm"
                  onClick={() => handleViewDetails(product.id)}
                >
                  View Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal
        show={showProductModal}
        onHide={handleCloseModal}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProductId &&
            products
              .filter((product) => product.id === selectedProductId)
              .map((product) => (
                <div key={product.id} className="product-details">
                  <h4>Product Information</h4>
                  <p><strong>ID:</strong> {product.id}</p>
                  <p><strong>Name:</strong> {product.name}</p>
                  <p><strong>SKU:</strong> {product.sku}</p>
                  <p><strong>Description:</strong> {product.description}</p>
                  <p><strong>Quantity:</strong> {product.quantity}</p>
                  <p><strong>Price:</strong> {product.price}</p>
                  <p><strong>Supplier:</strong> {product.supplier}</p>

                  <Button
                    variant="warning"
                    className="mr-2"
                    onClick={() => onEditProduct(product.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => onDeleteProduct(product.id)}
                  >
                    Delete
                  </Button>
                </div>
              ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onAddProductClick: PropTypes.func.isRequired,
  onEditProduct: PropTypes.func.isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
};

export default ProductList;
