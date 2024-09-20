import React, { useState } from 'react';
import './Login.css';
import { LoginService } from './Login.service';
import { LoginProps } from './Login.types';

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setError(null); // Clear previous errors
      await LoginService(username, password);
      onLoginSuccess();
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid username or password'); // Set error message
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>} {/* Show error if login fails */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
