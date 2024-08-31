import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ReactTabulator } from 'react-tabulator';
import AddExpense from '../../components/AddExpensePopup/AddExpensePopup';
import { IExpense } from '../../models/IExpense';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabulator/lib/styles.css'; // Import Tabulator styles
import 'react-tabulator/css/tabulator_modern.min.css'; // Import Tabulator Bootstrap styles

import './Expenses.css';

const Expenses: React.FC = () => {
  const [show, setShow] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState<IExpense | null>(null);
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Groceries', amount: 100, date: '2023-01-01', notes: 'Bought fruits and vegetables' },
    { id: 2, name: 'Gas', amount: 50, date: '2023-01-02', notes: 'Filled up the tank' },
    { id: 3, name: 'Rent', amount: 1000, date: '2023-01-03', notes: 'Paid monthly rent' },
  ]);
  const categories = ["Groceries", "Health", "Payments", "Shopping", "Misc", "Gifts", "Entertainment", "Travel", "Education", "Insurance", "Investments", "Loans", "Rent", "Taxes", "Utilities", "Other Expense"];

  const handleClose = () => { setShow(false); setSelectedExpense(null); };
  const handleShow = () => setShow(true);

  const handleAddExpense = (expense: IExpense) => {
    const existingInd = expenses.findIndex(exp => exp.id === expense.id);
    if (existingInd !== -1 && expense.id) {
      expenses[existingInd] = { id: expense.id, ...expense, notes: expense.notes || '' };
      setExpenses([...expenses]);
    } else {
      const newExpense = { id: expenses.length + 1, ...expense, notes: expense.notes || '' };
      setExpenses([...expenses, newExpense]);
    }
  };

  const handleEditExpense = (expense: IExpense) => {
    setSelectedExpense(expense);
    setShow(true);
  };

  const columns = [
    { title: 'ID', field: 'id', width: "10%" },
    { title: 'Name', field: 'name', width: "25%" },
    { title: 'Amount', field: 'amount', width: "15%" },
    { title: 'Date', field: 'date', width: "15%" },
    { title: 'Notes', field: 'notes', width: "25%" },
    {
      title: 'Actions',
      field: 'actions',
      width: "10%",
      formatter: (cell: any) => {
        return `<button class="btn btn-primary btn-sm">Edit</button>`;
      },
      cellClick: (e: any, cell: any) => {
        const expense = cell.getRow().getData();
        handleEditExpense(expense);
      }
    }
  ];

  return (
    <div className="expenses">
    <h1>Expenses</h1>
      <Button variant="primary" onClick={handleShow}>
        Add Expense
      </Button>
      <AddExpense selectedExpense={selectedExpense} categories={categories} show={show} handleClose={handleClose} handleAddExpense={handleAddExpense}/>
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