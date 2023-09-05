import React from "react";
import { AuthCredentials } from "../components/RegisterForm";
import { Box } from "@mui/material";
import RegisterForm from "../components/RegisterForm";
import { registerUserAsync } from "../features/auth/authSlice";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

export const registerUserValidation: Yup.ObjectSchema<AuthCredentials> =
  Yup.object().shape({
    name: Yup.string()
      .min(4, "must be at least 4 characters long")
      .required("This field is required!"),
    email: Yup.string()
      .email("This is not a valid email")
      .required("This field is required!"),
    password: Yup.string()
      .min(12, "The password must be at least 12 characters long")
      .required(),
  });

const RegisterPage = () => {
  const dispatch = useDispatch();
  const initialValues: AuthCredentials = {
    name: "",
    email: "",
    password: "",
  };

  const handleRegister = async (userData: AuthCredentials) => {
    try {
      const resultAction = await dispatch(registerUserAsync(userData) as any);
      const response = unwrapResult(resultAction);
      console.log(response);

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  // On succesfully registering, call registerUserAsync passing in the userData
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <RegisterForm
        initialValues={initialValues}
        handleRegisterFormik={handleRegister}
        registerUserSchema={registerUserValidation}
      />
    </Box>
  );
};

export default RegisterPage;
