const apiUrl = process.env.REACT_APP_API_URL;

export const LoginService = async (email: string, password: string): Promise<void> => {
  try {
    const response = await fetch(`${apiUrl}/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
};
