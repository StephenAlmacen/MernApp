// src/components/Login/Login.types.ts

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  token?: string; 
  errorMessage?: string;
}

export interface LoginProps {
  onLoginSuccess: (token: string) => void;
}
