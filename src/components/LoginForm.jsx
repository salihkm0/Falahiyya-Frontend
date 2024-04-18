import React from "react";
import {
  Form,
  FormField,
  IconContainer,
  InputStyle,
  SubmitBtn,
} from "../styles/LoginStyle.jsx";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

export const LoginForm = () => {
  return (
    <>
        <Form>
          <FormField>
            <IconContainer>
              <PersonIcon sx={{ color: "#ccc" }} />
            </IconContainer>
            <InputStyle type="number" placeholder="Mobile Number" required />
          </FormField>
          <FormField>
            <IconContainer>
              <LockIcon sx={{ color: "#ccc" }} />
            </IconContainer>
            <InputStyle type="password" placeholder="Password" required />
          </FormField>
          <FormField>
            <SubmitBtn>Sign In</SubmitBtn>
          </FormField>
        </Form>
    </>
  );
};