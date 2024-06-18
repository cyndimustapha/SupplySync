/* eslint-disable react/prop-types */
// TransactionForm.jsx
import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

function TransactionForm({
  onClose,
  refreshTransactions,
  transactionToEdit,
  isEditing,
}) {
  const [userId, setUserId] = useState(transactionToEdit? transactionToEdit.user_id : "");
  const [productId, setProductId] = useState(transactionToEdit? transactionToEdit.product_id : "");
  const [date, setDate] = useState(transactionToEdit? transactionToEdit.date : "");
  const [quantity, setQuantity] = useState(transactionToEdit? transactionToEdit.quantity : "");
  const [totalPrice, setTotalPrice] = useState(transactionToEdit? transactionToEdit.total_price : "");
  const [transactionType, setTransactionType] = useState(transactionToEdit? transactionToEdit.type : "");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      user_id: userId,
      product_id: productId,
      date,
      quantity,
      total_price: totalPrice,
      type: transactionType,
    };

    if (isEditing) {
      fetch(`http://127.0.0.1:8000/transactions/${transactionToEdit.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTransaction),
      })
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          refreshTransactions();
          onClose(); // Close the form after submission
        })
       .catch((error) => console.error("Error editing transaction:", error));
    } else {
      fetch("http://127.0.0.1:8000/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTransaction),
      })
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          refreshTransactions();
          onClose(); // Close the form after submission
        })
       .catch((error) => console.error("Error creating transaction:", error));
    }
  };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{isEditing? "Edit Transaction" : "Add Transaction"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUserId">
            <Form.Label>User ID</Form.Label>
            <Form.Control
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter user ID"
            />
          </Form.Group>
          <Form.Group controlId="formProductId">
            <Form.Label>Product ID</Form.Label>
            <Form.Control
              type="text"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              placeholder="Enter product ID"
            />
          </Form.Group>
          <Form.Group controlId="formQuantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Enter quantity"
            />
          </Form.Group>
          <Form.Group controlId="formTransactionType">
            <Form.Label>Transaction Type</Form.Label>
            <Form.Control
              type="text"
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
              placeholder="Enter transaction type"
            />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formTotalPrice">
            <Form.Label>Total Price</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              value={totalPrice}
              onChange={(e) => setTotalPrice(e.target.value)}
              placeholder="Enter total price"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {isEditing? "Save Changes" : "Add Transaction"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default TransactionForm;