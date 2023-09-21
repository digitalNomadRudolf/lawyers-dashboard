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
  const response = await axios.post(`${API_URL}/login`, credentials);
  console.log(response);
  return response;
};

export const logoutUser = async () => {};
