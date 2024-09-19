// src/App.tsx

import React from 'react';
import { Login } from './components';

const App: React.FC = () => {
  const handleLoginSuccess = () => {
    console.log('Login successful!');
    // Handle successful login (e.g., redirect to another page)
  };

  return (
    <div className="App">
      <h1>Login Example</h1>
      <Login onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default App;
