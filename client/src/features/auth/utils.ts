import axios from "axios";
import { AuthCredentials } from "../../components/RegisterForm";

const API_URL = process.env.REACT_APP_BASE_URL;

export const registerUser = async (userData: AuthCredentials) => {
  console.log("registerUser called:", userData);
  console.log(API_URL);
  const response = await axios.post(`${API_URL}/register`, userData);
  return response;
};

export const loginUser = async (credentials: Omit<AuthCredentials, "name">) => {
  const response = axios.post(`${API_URL}/login`, credentials);
  console.log(response);
  return response;
};

export const logoutUser = async () => {};

// After successful login, store data in localStorage
export const storeLoginData = (token: string) => {
  localStorage.setItem("token", token);
  localStorage.setItem("isLoggedIn", "true");
};

// Check for existing login data
export const checkExistingLoginData = () => {
  const token = localStorage.getItem("token");
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return {
    token,
    isLoggedIn,
  };
};
