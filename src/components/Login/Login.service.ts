import axios from 'axios';
import { LoginRequest, LoginResponse } from './Login.types';

const apiUrl = process.env.REACT_APP_API_URL;

if (!apiUrl) {
  throw new Error('REACT_APP_API_URL is not defined');
}

// Login service function that sends login request to the server
export const LoginService = async (loginRequest: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/login`, 
      loginRequest, 
      { withCredentials: true } // Enable cookies to be sent with the request
    );
    console.log(response);
    if (response.data) {
      return { success: true, token: response.data.token };
    }

    return { success: false, errorMessage: 'Login failed' };
  } catch (error) {
    const errorMessage = axios.isAxiosError(error) && error.response 
      ? error.response.data.message || 'An error occurred during login'
      : 'An unexpected error occurred';

    console.error('An error occurred:', errorMessage);
    return { success: false, errorMessage };
  }
};
