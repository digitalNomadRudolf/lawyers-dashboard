import React from "react";
import { useDispatch } from "react-redux";
import { AuthCredentials } from "../components/RegisterForm";
import { loginUserAsync } from "../features/auth/authSlice";
import { Omit } from "@reduxjs/toolkit/dist/tsHelpers";
import { unwrapResult } from "@reduxjs/toolkit";
import * as Yup from "yup";
import {
  CenterBox,
  AuthForm,
  FieldWrapper,
  Input,
  StyledErrorMessage,
  SubmitButton,
  PageWrapper,
  StyledTitle,
} from "../styles/AuthStyles";
import { Formik, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { storeLoginData } from "../features/auth/utils";

const loginUserValidation: Yup.ObjectSchema<Omit<AuthCredentials, "name">> =
  Yup.object().shape({
    email: Yup.string()
      .email("This is not a valid email")
      .required("This field is required!"),
    password: Yup.string()
      .min(12, "The password must be at least 12 characters long")
      .required("Password is required!"),
  });

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  type InitialValuesType = Omit<AuthCredentials, "name">;

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
      console.log(response);
      //Store user login data
      storeLoginData(response.token);

      // Redirect to Dashboard Page
      navigate("/dashboard");

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PageWrapper>
      <CenterBox>
        <Formik
          initialValues={initialValues}
          validationSchema={loginUserValidation}
          onSubmit={handleLogin}
        >
          {({ errors, touched, isValid, isSubmitting }) => (
            <AuthForm>
              <StyledTitle>Login</StyledTitle>
              <FieldWrapper>
                <Input
                  type="email"
                  name="email"
                  autoCapitalize="off"
                  autoCorrect="off"
                  autoComplete="email"
                  placeholder="Your email"
                  className={
                    errors.email && touched.email
                      ? "error"
                      : !errors.email && touched.email
                      ? "valid"
                      : ""
                  }
                />
              </FieldWrapper>
              <div className="error-container">
                <ErrorMessage name="email" className="error-message">
                  {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
                </ErrorMessage>
              </div>

              <FieldWrapper>
                <Input
                  type="password"
                  name="password"
                  placeholder="Your password..."
                  className={
                    errors.password && touched.password
                      ? "error"
                      : !errors.password && touched.password
                      ? "valid"
                      : ""
                  }
                />
              </FieldWrapper>
              <div className="error-container">
                <ErrorMessage name="password" className="error-message">
                  {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
                </ErrorMessage>
              </div>

              <SubmitButton type="submit" disabled={!isValid || isSubmitting}>
                {isSubmitting ? "Logging in..." : "Login"}
              </SubmitButton>
            </AuthForm>
          )}
        </Formik>
        {/* TODO: Show any loginError in a div login-error */}
      </CenterBox>
    </PageWrapper>
  );
};

export default LoginPage;
