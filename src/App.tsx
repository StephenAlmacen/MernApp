// src/App.tsx
// src/App.tsx
import './App.css'; // Make sure this line is present
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';
import Cookies from 'js-cookie';

const App: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (token: string) => {
    console.log('Login successful! Token:', token);
    navigate('/dashboard');
  };

  useEffect(() => {
    const web_jwt = Cookies.get('web_jwt'); // Get token from cookie\
    if (web_jwt) {
      navigate('/dashboard'); // Redirect to dashboard if token is present
    }
  }, [navigate]);
  
  return (
    <div className="App">
      <Header />
      <br></br>
      <main className="main-content"> {/* Added main tag */}
        <Routes>
          <Route path="/" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const Root: React.FC = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default Root;
