import React from 'react';
import './App.css';
import Expenses from './pages/Expenses/Expenses';

function App() {
  return (
    <div className="app">
      <header className="app-header">Expense Tracker</header>
      <div className="body-container">
        <Expenses />
      </div>
    </div>
  );
}

export default App;
