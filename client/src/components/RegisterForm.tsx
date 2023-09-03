import React from "react";
import { Box } from "@mui/material";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
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
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="Your full name..." />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <ErrorMessage
              name="name"
              component="div"
              className="alert alert-danger"
            />

            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="Your email"
              type="email"
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <ErrorMessage
              name="email"
              component="div"
              className="alert alert-danger"
            />

            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="Create a password of a minimum of 12 characters"
            />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <ErrorMessage
              name="password"
              component="div"
              className="alert alert-danger"
            />

            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default RegisterForm;
