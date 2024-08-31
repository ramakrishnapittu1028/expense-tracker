import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMoneyBill, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end>
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/expenses">
            <FontAwesomeIcon icon={faMoneyBill} />
            <span>Expenses</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            <FontAwesomeIcon icon={faInfoCircle} />
            <span>About</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;