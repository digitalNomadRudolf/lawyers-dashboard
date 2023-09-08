import styled from "@emotion/styled";
import { Field, Form } from "formik";

export const PageWrapper = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
`;

// Center Register and Login boxes
export const CenterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const AuthForm = styled(Form)`
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1rem;
  text-align: center;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h1 {
    margin-bottom: 20px;
  }
`;

export const FieldWrapper = styled.div`
  text-align: left;

  label {
    display: block;
    margin-bottom: 5px;
  }
`;

export const StyledTitle = styled.h1`
  color: #1565c0;
  margin: 1rem 0 1.5rem;
`;

export const Label = styled.label`
  margin-top: 1.5rem;
  width: 100%;
`;

export const Input = styled(Field)`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 3px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.75rem 0.75rem;

  &:focus,
  &:active {
    box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px,
      rgb(227, 230, 232) 0px 0px 0px 3px;
    border: 1px solid rgb(26, 33, 43);
    outline: none;
  }

  /* Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: white;
    border: 1px solid lightgrey;
    box-shadow: 0 0 0px 1000px #fff inset;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black;
  }

  &.valid {
    border: 1px solid rgb(0, 156, 38);

    &:focus,
    &:active {
      border: 1px solid rgb(0, 156, 38);
      box-shadow: rgb(106, 237, 97) 0px 0px 2px 1px,
        rgb(177, 247, 160) 0px 0px 0px 3px;
      outline: none;
    }

    /* Autocomplete styles in Chrome*/
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      border: 1px solid rgb(0, 156, 38);
    }
  }

  &.error {
    border: 1px solid rgb(191, 49, 12);
    outline: none;

    &:focus,
    &:active {
      box-shadow: rgb(244, 129, 116) 0px 0px 2px 1px,
        rgb(251, 178, 174) 0px 0px 0px 3px;
      border: 1px solid rgb(191, 49, 12);
      outline: none;
    }

    /* Autocomplete styles in Chrome*/
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      border: 1px solid rgb(191, 49, 12);
    }
  }
`;

export const StyledErrorMessage = styled.div`
  background-color: rgb(255, 245, 245);
  color: rgb(120, 27, 0);
  display: flex;
  padding: 1rem 0.75rem;
  margin-top: 0.5rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: 1.5rem;

  background-color: rgb(24, 81, 187);
  display: block;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 700;
  height: 3rem;
  white-space: nowrap;
  color: rgb(232, 243, 255) !important;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease;

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
    background-color: #3c81c9;
  }

  &:disabled {
    cursor: pointer;
    background-color: rgb(163, 168, 173);
    box-shadow: none;
    color: rgb(255, 255, 255) !important;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`;
