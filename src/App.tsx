// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

const App: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLoginSuccess = () => {
    console.log('Login successful!');
    navigate('/dashboard'); // Redirect to Dashboard on successful login
  };

  return (
    <div className="App">
      {/* Pass handleLoginSuccess to Login component */}
      <Login onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

// Root component with Router
const Root: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default Root;
