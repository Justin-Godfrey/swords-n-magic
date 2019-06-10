import styled, { keyframes } from 'styled-components';

// Animations
const glow = keyframes`
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`

// Styled Components
export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #282a36;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const FormContainer = styled.form`
  width: 30%;
  height: 60%;
  background: #44475a;
  border: 2px solid #6272a4;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const FormHeader = styled.div`
  width: 80%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const FormTitle = styled.h1`
  font-size: 24px;
  color: #50fa7b;
`

export const FormInput = styled.input.attrs({
  placeholder: props => {
    if (props.email) return "email"
    if (props.password) return "password"
    if (props.firstname) return 'first name'
    if(props.lastname) return 'last name'
  },
  type: props => {
    if(props.email) return 'email'
    if(props.password) return 'password'
    return 'text'
  }
})`
  width: 80%;
  height: 10%;
  outline: none;
`

export const FormBtn = styled.button`
  width: 80%;
  height: 10%;
  background: ${props => props.register ? '#bd93f9' : '#f1fa8c'};
  color: #6272a4;
  border: none;
  &:hover {
    background: ${props => props.register ? '#ff79c6' : '#ffb86c'};
    cursor: pointer;
  }
`

export const ThemeSwitcherBtn = styled.button`
  width: 25%;
  height: 10%;
  background: ${props => props.register ? 'pink' : 'aquamarine'};
  color: white;
  border: none;
`