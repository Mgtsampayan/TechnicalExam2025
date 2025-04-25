import axios from 'axios';

// Define the API base URL - make sure this matches your backend server
const API_URL = 'http://localhost:5000/api';

// Types
export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
}

// Register a new user
export const register = async (userData: RegisterData) => {
  try {
    const response = await axios.post(`${API_URL}/registration`, userData);
    return response.data;
  } catch (error: any) {
    ;
    console.error('Registration error:', error.response?.data || error.message);
    throw error.response?.data || { message: 'Failed to register' };
  }
};

// Login user
export const login = async (credentials: LoginData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);

    // Store user data in localStorage
    if (response.data.token) {
      const userData = {
        id: response.data.user.id,
        firstName: response.data.user.firstName,
        lastName: response.data.user.lastName,
        email: response.data.user.email,
        token: response.data.token
      };
      localStorage.setItem('user', JSON.stringify(userData));
      return { user: userData };
    }

    return response.data;
  } catch (error: any) {
    console.error('Login error:', error.response?.data || error.message);
    throw error.response?.data || { message: 'Failed to login' };
  }
};

// Logout user
export const logout = () => {
  localStorage.removeItem('user');
};

// Get current user from localStorage
export const getCurrentUser = (): User | null => {
  const userJson = localStorage.getItem('user');
  if (userJson) {
    return JSON.parse(userJson);
  }
  return null;
};