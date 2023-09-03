import React from "react";
import { Box } from "@mui/material";
import { Formik, Field, Form, FormikHelpers } from "formik";
import * as Yup from "yup";

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
    <Box>
      <h1>Signup</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleRegisterFormik}
        validationSchema={registerUserSchema}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="Your full name..." />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="Your email"
            type="email"
          />

          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            placeholder="Create a password of a minimum of 12 characters"
          />

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </Box>
  );
};

export default RegisterForm;
