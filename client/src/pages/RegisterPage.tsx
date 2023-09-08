import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthCredentials } from "../components/RegisterForm";
import RegisterForm from "../components/RegisterForm";
import { registerUserAsync } from "../features/auth/authSlice";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { CenterBox, PageWrapper } from "../styles/AuthStyles";

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
  const navigate = useNavigate();

  const initialValues: AuthCredentials = {
    name: "",
    email: "",
    password: "",
  };

  const registrationError = useSelector(
    (state: RootState) => state.auth.registrationError
  );

  const handleRegister = async (userData: AuthCredentials) => {
    try {
      const resultAction = await dispatch(registerUserAsync(userData) as any);
      const response = unwrapResult(resultAction);
      console.log(response);
      // redirect to login page
      navigate("/login");
    } catch (error: any) {
      console.log(error);
    }
  };

  // On succesfully registering, call registerUserAsync passing in the userData
  return (
    <PageWrapper>
      <CenterBox>
        <RegisterForm
          initialValues={initialValues}
          handleRegisterFormik={handleRegister}
          registerUserSchema={registerUserValidation}
          registrationError={registrationError}
        />
      </CenterBox>
    </PageWrapper>
  );
};

export default RegisterPage;
