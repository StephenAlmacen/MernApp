import React, { useState } from 'react';
import { logout } from './Header.service'; // Adjust the path as needed
import './Header.css';

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      // Redirect to login page after successful logout
      window.location.href = '/';
    } catch (error) {
      console.error('An error occurred during logout', error);
    }
  };

  return (
    <header className="header">
      <h1 className="header-title">My Application</h1>
      <div className="profile-menu">
        <button onClick={toggleDropdown} className="profile-button">
          Profile ▼
        </button>
        {isDropdownOpen && (
          <ul className="dropdown">
            <li><a href="/account-settings">Account Settings</a></li>
            <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
