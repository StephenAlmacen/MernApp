// src/components/Header.tsx

import React from 'react';
import './Header.css'; // Import CSS file

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="header-title">My Application</h1>
      <nav className="header-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
