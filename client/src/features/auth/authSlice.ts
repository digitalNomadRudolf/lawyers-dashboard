import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "./utils";
import { UserCredentials } from "../../types/UserCredentials";
import { RegisterData } from "../../components/RegisterForm";

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
  async (userData: RegisterData, { dispatch }) => {
    const response = await registerUser(userData);
    const token = response.data.token;
    localStorage.setItem("token", token);
    console.log({ response });

    dispatch(login(response.data));
    return response.data;
  }
);

export const loginUserAsync = createAsyncThunk(
  "auth/loginUser",
  async (credentials: UserCredentials, thunkAPI) => {
    const response = await loginUser(credentials);
    const token = response.data.token;
    localStorage.setItem("token", token);
    thunkAPI.dispatch(login({ token }));
    return response;
  }
);

export const { setLoggedIn, login, logout } = authSlice.actions;
export default authSlice.reducer;
