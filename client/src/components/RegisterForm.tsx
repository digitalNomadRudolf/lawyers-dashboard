import React from "react";
import { Box } from "@mui/material";
import { Formik, Form, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  PageWrapper,
  Label,
  Input,
  SubmitButton,
  StyledErrorMessage,
  StyledTitle,
} from "../styles";
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
}

const RegisterForm = ({
  initialValues,
  handleRegisterFormik,
  registerUserSchema,
}: RegisterFormProps) => {
  // Formik form
  return (
    <PageWrapper>
      <Box>
        <StyledTitle>Signup</StyledTitle>
        <Formik
          initialValues={initialValues}
          onSubmit={handleRegisterFormik}
          validationSchema={registerUserSchema}
          validateOnMount={true}
        >
          {({ errors, touched, isValid, isSubmitting }) => (
            <Form>
              <Label htmlFor="name">
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
              </Label>
              <div className="error-container">
                <ErrorMessage name="name" className="error-message">
                  {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
                </ErrorMessage>
              </div>

              <Label htmlFor="email">
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
              </Label>
              <div className="error-container">
                <ErrorMessage name="email" className="error-message">
                  {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
                </ErrorMessage>
              </div>

              <Label htmlFor="password">
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
              </Label>
              <div className="error-container">
                <ErrorMessage name="password" className="error-message">
                  {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
                </ErrorMessage>
              </div>

              <SubmitButton type="submit" disabled={!isValid || isSubmitting}>
                {isSubmitting ? "Loading..." : "Register"}
              </SubmitButton>
            </Form>
          )}
        </Formik>
      </Box>
    </PageWrapper>
  );
};

export default RegisterForm;
