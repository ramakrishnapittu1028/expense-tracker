import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddExpensePopup.css';
import { IExpense } from '../../models/IExpense';

interface AddExpenseModalProps {
    selectedExpense: IExpense | null;
    categories: string[];
    show: boolean;
    handleClose: () => void;
    handleAddExpense: (expense: IExpense) => void;
  }

const AddExpense: React.FC<AddExpenseModalProps> = ({ selectedExpense, categories, show, handleClose, handleAddExpense }) => {
    const [expense, setExpense] = useState<IExpense>({
        id: 0,
        name: '',
        amount: 0,
        date: '',
        notes: ''
      });

    useEffect(() => {
        if (selectedExpense) {
            setExpense(selectedExpense);
          } else {
            setExpense({
              id: 0,
              name: '',
              amount: 0,
              date: '',
              notes: ''
            });
        }
    }, [selectedExpense]);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        console.log(name, value);
        setExpense({ ...expense, [name]: value });
      };
    
      const handleSubmit = () => {
        handleAddExpense(expense);
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
                    <Form.Control as="select" name='name' value={expense.name} onChange={handleChange}>
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
                        name='amount'
                        placeholder="Enter amount"
                        value={expense.amount}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formDate">
                    <Form.Label>Date*</Form.Label>
                    <Form.Control
                        type="date"
                        name='date'
                        value={expense.date}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formNotes">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Enter notes"
                        value={expense.notes}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit} disabled={!expense.name || !expense.amount || !expense.date}>
            {selectedExpense ? 'Save Changes' : 'Add Expense'}
            </Button>
        </Modal.Footer>
    </Modal>
);
};

export default AddExpense;