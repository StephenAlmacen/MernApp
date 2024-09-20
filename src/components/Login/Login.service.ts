// src/components/Login/Login.service.ts

import axios from 'axios';
import { LoginRequest, LoginResponse } from './Login.types';

const apiUrl = process.env.REACT_APP_API_URL;

if (!apiUrl) {
  throw new Error('REACT_APP_API_URL is not defined');
}

export const LoginService = async (loginRequest: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await axios.post(`${apiUrl}/api/login`, loginRequest);

    if (response.data) {
      // Store the token securely (e.g., in local storage)
      localStorage.setItem('authToken', "I am ze token of death");
      return { success: true, token: "I am ze token of death" };
    }

    return { success: false, errorMessage: 'Login failed: no token returned' };
  } catch (error) {
    const errorMessage = axios.isAxiosError(error) && error.response 
      ? error.response.data.message || 'An error occurred during login'
      : 'An unexpected error occurred';
      
    console.error('An error occurred:', errorMessage);
    return { success: false, errorMessage };
  }
};
