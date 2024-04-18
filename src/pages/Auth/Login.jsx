import React from "react";
import { LoginForm } from "../../components/LoginForm";
import { FormContainer, FormHeading, FormHeadingContainer, FormSubHeading, LoginContainer } from "../../styles/LoginStyle";

export const Login = () => {
  return (
    <>
      <LoginContainer>
        <FormContainer>
          <FormHeadingContainer>
          <FormHeading>Welcom to </FormHeading> <br/><br/>
            <FormHeading>Al Madrasathul Falahiyya</FormHeading> <br />
            <FormSubHeading>Kalarandi</FormSubHeading>
            
          </FormHeadingContainer>
          <LoginForm />
        </FormContainer>
      </LoginContainer>
    </>
  );
};
