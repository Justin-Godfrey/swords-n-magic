import React from "react";
import "reset-css";
import LoginNavbar from "../loginNavbar/loginNavbar";
import axios from 'axios'

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
      showRegisterDisplay: false,
      firstname: '',
      lastname: '',
      password: '',
      email: '',
    }
  }

  toggleRegisterMenu = event => {
    event.preventDefault();
    this.setState({
      showRegisterDisplay: !this.state.showRegisterDisplay
    })
  }

handleInputChange  = (event) => {
  this.setState({
    [event.target.name] : event.target.value
  })
}

handleRegisterUser = (event) => {
  event.preventDefault()
  const{firstname, lastname, password, email} = this.state
  axios.post('/auth/newUser', {firstname, lastname, password, email})
  .then((response) => {
    // Store user to redux
    this.props.history.push('/highlights')
  })
}

  render() {
    console.log(this.state)
    return (
      
      <div>
          <LoginNavbar />
        {
          this.state.showRegisterDisplay ?
          <AppContainer>
          <FormContainer onSubmit={this.handleRegisterUser}>
            <FormHeader>
              <FormTitle>Community Highlights</FormTitle>
            </FormHeader>
            <FormInput onChange={this.handleInputChange} firstname="firstname" name='firstname' />
            <FormInput onChange={this.handleInputChange} lastname="lastname" name='lastname' />
            <FormInput onChange={this.handleInputChange} email="email" name='email' />
            <FormInput onChange={this.handleInputChange} password="password" name='password' />
            <FormBtn>Submit</FormBtn>
            <FormBtn register onClick={this.toggleRegisterMenu}>Cancel</FormBtn>
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
