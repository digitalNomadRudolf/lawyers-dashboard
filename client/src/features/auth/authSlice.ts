import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "./utils";
import { AuthCredentials } from "../../components/RegisterForm";
import { Omit } from "@reduxjs/toolkit/dist/tsHelpers";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoggedIn: false,
    token: null,
  },
  reducers: {
    setLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    login: (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem("token");
    },
  },
});

export const registerUserAsync = createAsyncThunk(
  "auth/registerUser",
  async (userData: AuthCredentials, { dispatch }) => {
    const response = await registerUser(userData);
    console.log({ response });
    return response;

    return response.data;
  }
);

export const loginUserAsync = createAsyncThunk(
  "auth/loginUser",
  async (credentials: Omit<AuthCredentials, "name">, { dispatch }) => {
    const response = await loginUser(credentials);
    const token = response.data.token;
    console.log("login response: ", response);
    localStorage.setItem("token", token);
    dispatch(login({ token }));
    return response;
  }
);

export const { setLoggedIn, login, logout } = authSlice.actions;
export default authSlice.reducer;
