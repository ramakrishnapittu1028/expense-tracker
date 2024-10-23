import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Expense Tracker</h1>
        <p>Manage your expenses efficiently and effectively.</p>
      </header>
      <nav className="home-nav">
        <Link to="/expenses" className="home-link">View Expenses</Link>
        <Link to="/add-expense" className="home-link">Add Expense</Link>
        <Link to="/about" className="home-link">About</Link>
      </nav>
      <section className="home-summary">
        <h2>Recent Expenses</h2>
        <ul>
          <li>Groceries - $100 on 2023-01-01</li>
          <li>Gas - $50 on 2023-01-02</li>
          <li>Rent - $1000 on 2023-01-03</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;