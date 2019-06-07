import React from "react";
import "reset-css";
import LoginNavbar from "../loginNavbar/loginNavbar";

// Styled Components
import {
  AppContainer,
  FormContainer,
  FormHeader,
  FormTitle,
  FormInput,
  FormBtn
} from "./LoginStyles";

class Login extends React.Component {
  render() {
    return (
      <div>
        <LoginNavbar />
        <AppContainer>
          <FormContainer>
            <FormHeader>
              <FormTitle>Community Highlights</FormTitle>
            </FormHeader>
            <FormInput email="email" />
            <FormInput />
            <FormBtn>Submit</FormBtn>
            <FormBtn register>Register</FormBtn>
          </FormContainer>
        </AppContainer>
      </div>
    );
  }
}

export default Login;
