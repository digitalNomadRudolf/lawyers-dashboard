import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "./utils";
import { AuthCredentials } from "../../components/RegisterForm";
import { Omit } from "@reduxjs/toolkit/dist/tsHelpers";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    isRegistering: false,
    registrationError: null,
    isLoggedIn: false,
    loginError: null,
    token: null,
  },
  reducers: {
    registerStart: (state) => {
      state.isRegistering = true;
      state.registrationError = null;
      /* console.log(action.payload);
      state.user = action.payload.user; */
    },
    registerSuccess: (state) => {
      state.isRegistering = false;
    },
    registerFailure: (state, action) => {
      state.isRegistering = false;
      state.registrationError = action.payload;
    },
    setLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    login: (state, action) => {
      console.log(action);
      state.user = action.payload;
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    loginFailure: (state, action) => {
      state.loginError = action.payload;
    },
    logout: (state) => {
      state.user = {};
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("user");
    },
  },
});

export const registerUserAsync = createAsyncThunk(
  "auth/registerUser",
  async (userData: AuthCredentials, { dispatch }) => {
    try {
      dispatch(registerStart());
      const { data: user } = await registerUser(userData);
      console.log({ user });
      dispatch(registerSuccess());
      //return user;
    } catch (error: any) {
      console.log(error);
      if (error.response.status === 500) {
        const errorMessage = error.response.data.error;
        console.log({ errorMessage });
        dispatch(registerFailure(errorMessage));
      }

      throw error;
    }
  }
);

export const loginUserAsync = createAsyncThunk(
  "auth/loginUser",
  async (credentials: Omit<AuthCredentials, "name">, { dispatch }) => {
    try {
      const { data: user } = await loginUser(credentials);
      console.log("login response: ", user);
      dispatch(setLoggedIn());
      dispatch(login(user));
    } catch (error) {
      console.log(error);
      dispatch(loginFailure(error));
    }
  }
);

export const {
  registerStart,
  registerFailure,
  registerSuccess,
  loginFailure,
  setLoggedIn,
  login,
  logout,
} = authSlice.actions;
export default authSlice.reducer;
