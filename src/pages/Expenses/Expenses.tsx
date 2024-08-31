import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabulator/lib/styles.css'; // Import Tabulator styles
import 'react-tabulator/css/tabulator_materialize.min.css'; // Import Tabulator Bootstrap styles
import { ReactTabulator } from 'react-tabulator';
import AddExpense from '../../components/AddExpensePopup/AddExpensePopup';
import './Expenses.css';

const Expenses: React.FC = () => {
  const [show, setShow] = useState(false);
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Groceries', amount: 100, date: '2023-01-01' },
    { id: 2, name: 'Gas', amount: 50, date: '2023-01-02' },
    { id: 3, name: 'Rent', amount: 1000, date: '2023-01-03' }
  ]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddExpense = (expense: { name: string; amount: number; date: string }) => {
    const newExpense = { id: expenses.length + 1, ...expense };
    setExpenses([...expenses, newExpense]);
  };

  const columns = [
    { title: 'ID', field: 'id', width: "10%" },
    { title: 'Name', field: 'name', width: "35%" },
    { title: 'Amount', field: 'amount', width: "30%" },
    { title: 'Date', field: 'date', width: "25%" }
  ];

  return (
    <div className="expenses">
      <Button variant="primary" onClick={handleShow}>
        Add Expense
      </Button>
      <AddExpense show={show} handleClose={handleClose} handleAddExpense={handleAddExpense}/>
      <div className="grid-container">
        <ReactTabulator
            data={expenses}
            columns={columns}
            layout="fitData"
          />
      </div>
    </div>
  );
};

export default Expenses;