import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

if (!apiUrl) {
  throw new Error('REACT_APP_API_URL is not defined');
}

// Logout service function that sends logout request to the server
// Logout service function that sends logout request to the server
export const logout = async (): Promise<void> => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/logout`, 
      {}, // Payload can be empty
      { withCredentials: true } // Enable cookies to be sent with the request
    );

    if (response.status !== 200) {
      throw new Error('Logout failed');
    }
  } catch (error) {
    const errorMessage = axios.isAxiosError(error) && error.response 
      ? error.response.data.message || 'An error occurred during logout'
      : 'An unexpected error occurred';

    console.error('An error occurred:', errorMessage);
    throw error; // Re-throw to handle in component
  }
};

