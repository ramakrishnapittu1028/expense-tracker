import React, { useState } from 'react';
import Expenses from './pages/Expenses/Expenses';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import About from './pages/About/About';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`App ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar">
      <Navigation />
      <FontAwesomeIcon
          icon={isCollapsed ? faBars : faChevronLeft}
          className="toggle-icon"
          onClick={toggleSidebar}
        />
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
