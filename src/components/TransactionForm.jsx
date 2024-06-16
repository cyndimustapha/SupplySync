/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

function TransactionForm({ onClose }) {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [transactionType, setTransactionType] = useState('');
  const [date, setDate] = useState('');
  const [totalAmount, setTotalAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTransaction = { product_id: productId, quantity, transaction_type: transactionType, date, total_amount: totalAmount };

    fetch('http://127.0.0.1:8000/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        onClose(); // Close the form after submission
      })
      .catch(error => console.error('Error creating transaction:', error));
  };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Transaction</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formProductId">
            <Form.Label>Product ID</Form.Label>
            <Form.Control type="text" value={productId} onChange={(e) => setProductId(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formQuantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formTransactionType">
            <Form.Label>Transaction Type</Form.Label>
            <Form.Control type="text" value={transactionType} onChange={(e) => setTransactionType(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formTotalAmount">
            <Form.Label>Total Amount</Form.Label>
            <Form.Control type="number" step="0.01" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">Add Transaction</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default TransactionForm;
