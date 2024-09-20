// src/components/Footer.tsx

import React from 'react';
import './Footer.css'; // Import CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p className="footer-text">© {new Date().getFullYear()} My Application. All rights reserved.</p>
      <nav className="footer-nav">
        <ul>
          <li><a href="/">Privacy Policy</a></li>
          <li><a href="/">Terms of Service</a></li>
          {/* Add more footer links as needed */}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
