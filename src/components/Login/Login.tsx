import React, { useState } from 'react';
import './Login.css';
import { LoginService } from './Login.service';
import { LoginProps, LoginRequest } from './Login.types';

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [loginRequest, setLoginRequest] = useState<LoginRequest>({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null); 

    try {
      const response = await LoginService(loginRequest); // Pass the whole loginRequest object
      
      if (response.success && response.token) {
        onLoginSuccess(response.token); // Call onLoginSuccess with the token if needed
      } else {
        setError(response.errorMessage || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={loginRequest.email}
            onChange={(e) => setLoginRequest({ ...loginRequest, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={loginRequest.password}
            onChange={(e) => setLoginRequest({ ...loginRequest, password: e.target.value })}
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
