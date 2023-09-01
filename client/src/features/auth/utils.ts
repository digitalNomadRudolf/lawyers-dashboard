import axios from "axios";
import { UserProfile } from "../../types/UserProfile";
import { UserCredentials } from "../../types/UserCredentials";
import { RegisterData } from "../../components/RegisterForm";

const API_URL = process.env.REACT_APP_BASE_URL;

export const registerUser = async (userData: RegisterData) => {
  console.log("registerUser called:", userData);
  console.log(API_URL);
  const response = await axios.post(`${API_URL}/register`, userData);
  return response;
};

export const loginUser = async (credentials: UserCredentials) => {
  const response = axios.post(`${API_URL}/login`, credentials);
  return response;
};

export const logoutUser = async () => {};
