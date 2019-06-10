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
  constructor() {
    super();

    this.state = {
      showRegisterDisplay: false
    }
  }

  toggleRegisterMenu = event => {
    event.preventDefault();
    this.setState({
      showRegisterDisplay: !this.state.showRegisterDisplay
    })
  }
  render() {
    console.log(this.state.showRegisterDisplay)
    return (
      
      <div>
          <LoginNavbar />
        {
          this.state.showRegisterDisplay ?
          <AppContainer>
          <FormContainer>
            <FormHeader>
              <FormTitle>Community Highlights</FormTitle>
            </FormHeader>
            <FormInput firstname="firstname"/>
            <FormInput lastname="lastname"/>
            <FormInput email="email" />
            <FormInput password="password"/>
            <FormBtn>Submit</FormBtn>
            <FormBtn register>TEST</FormBtn>
          </FormContainer>
        </AppContainer>

        : <AppContainer>
        <FormContainer>
          <FormHeader>
            <FormTitle>Community Highlights</FormTitle>
          </FormHeader>
          <FormInput email="email" />
          <FormInput password="password"/>
          <FormBtn>Submit</FormBtn>
          <FormBtn register onClick={this.toggleRegisterMenu}>Register</FormBtn>
        </FormContainer>
      </AppContainer>
        }
      
        


        
      </div>
    );
  }
}

export default Login;
