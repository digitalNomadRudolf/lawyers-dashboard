import React from "react";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { AuthCredentials } from "../components/RegisterForm";
import { loginUserAsync } from "../features/auth/authSlice";
import { Omit } from "@reduxjs/toolkit/dist/tsHelpers";
import { unwrapResult } from "@reduxjs/toolkit";

/* loginUserValidation using Yup */

type InitialValuesType = Omit<AuthCredentials, "name">;

const LoginPage = () => {
  /* create dispatch using useDispatch */
  const dispatch = useDispatch();
  /* initialValues */
  const initialValues: InitialValuesType = {
    email: "",
    password: "",
  };

  /* handleLoginFormik method */
  const handleLogin = async (userData: InitialValuesType) => {
    try {
      const loginAction = await dispatch(loginUserAsync(userData) as any);
      const response = unwrapResult(loginAction);

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      LoginPage
    </Box>
  );
};

export default LoginPage;
