import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddExpensePopup.css';

interface AddExpenseModalProps {
    show: boolean;
    handleClose: () => void;
    handleAddExpense: (expense: { name: string; amount: number; date: string }) => void;
  }

const AddExpense: React.FC<AddExpenseModalProps> = ({ show, handleClose, handleAddExpense }) => {
    const [expenseName, setExpenseName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
  
    const handleSave = () => {
      // Handle save logic here
      handleAddExpense({ name: expenseName, amount: parseFloat(amount), date });
      handleClose();
    };
  
  return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group controlId="formExpenseName">
            <Form.Label>Expense Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter expense name"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
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
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Add Expense
          </Button>
        </Modal.Footer>
      </Modal>
  );
};

export default AddExpense;