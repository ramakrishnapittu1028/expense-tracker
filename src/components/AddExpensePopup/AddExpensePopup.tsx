import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddExpensePopup.css';
import { IExpense } from '../../models/IExpense';

interface AddExpenseModalProps {
    categories: string[];
    show: boolean;
    handleClose: () => void;
    handleAddExpense: (expense: IExpense) => void;
  }

const AddExpense: React.FC<AddExpenseModalProps> = ({ categories, show, handleClose, handleAddExpense }) => {
    const [expenseName, setExpenseName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [notes, setNotes] = useState('');

    useEffect(() => {
        if (show) {
          setExpenseName(categories[0]);
          setAmount('');
          setDate('');
          setNotes('');
        }
      }, [categories, show]);
  
    const handleSave = () => {
      // Handle save logic here
      handleAddExpense({ name: expenseName, amount: parseFloat(amount), date, notes });
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
                    <Form.Label>Expense Name*</Form.Label>
                    <Form.Control as="select"value={expenseName} onChange={(e) => setExpenseName(e.target.value)}>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formAmount">
                    <Form.Label>Amount*</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formDate">
                    <Form.Label>Date*</Form.Label>
                    <Form.Control
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formNotes">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="primary" onClick={handleSave} disabled={!expenseName || !amount || !date}>
                Add Expense
            </Button>
        </Modal.Footer>
    </Modal>
);
};

export default AddExpense;