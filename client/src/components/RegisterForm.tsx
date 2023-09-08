import React from "react";
import { Formik, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Input,
  SubmitButton,
  StyledErrorMessage,
  StyledTitle,
  AuthForm,
  FieldWrapper,
} from "../styles/AuthStyles";
import "../styles/errors.css";

export type AuthCredentials = {
  name: string;
  email: string;
  password: string;
};

interface RegisterFormProps {
  initialValues: AuthCredentials;
  handleRegisterFormik(
    userData: AuthCredentials,
    formikHelpers: FormikHelpers<AuthCredentials>
  ): void;
  registerUserSchema: Yup.ObjectSchema<AuthCredentials>;
  registrationError: null | string;
}

const RegisterForm = ({
  initialValues,
  handleRegisterFormik,
  registerUserSchema,
  registrationError,
}: RegisterFormProps) => {
  let errorMessage = null;

  if (registrationError) {
    if (registrationError.includes("duplicate")) {
      errorMessage = "This email address is already registered";
    } else {
      errorMessage = "An error occurred during registration.";
    }
  }

  // Formik form
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleRegisterFormik}
      validationSchema={registerUserSchema}
      validateOnMount={true}
    >
      {({ errors, touched, isValid, isSubmitting }) => (
        <AuthForm>
          <StyledTitle>Signup</StyledTitle>
          <FieldWrapper>
            <Input
              type="text"
              name="name"
              autoCorrect="off"
              autoComplete="name"
              placeholder="Your full name..."
              className={
                errors.name && touched.name
                  ? "error"
                  : !errors.name && touched.name
                  ? "valid"
                  : ""
              }
            />
          </FieldWrapper>
          <div className="error-container">
            <ErrorMessage name="name" className="error-message">
              {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
            </ErrorMessage>
          </div>

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
            {isSubmitting ? "Loading..." : "Register"}
          </SubmitButton>
        </AuthForm>
      )}
    </Formik>
  );
};

export default RegisterForm;
