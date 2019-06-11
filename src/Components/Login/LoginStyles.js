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
  background: #5D99C4;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const FormContainer = styled.form`
  width: 30%;
  height: 60%;
  background: rgba(0, 0, 0, .7);
  border: 2px solid #FFF;
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
  font-size: 30px;
  color: #FFF;
`

export const FormInput = styled.input.attrs({
  placeholder: props => {
    if (props.email) return "Email" 
    if (props.password) return "Password"
    if (props.firstname) return 'First name'
    if(props.lastname) return 'Last name'
  },
  type: props => {
    if(props.email) return 'email'
    if(props.password) return 'password'
    return 'text'
  },
  name: props => props.name
})`
  width: 80%;
  height: 10%;
  outline: none;
`

export const FormBtn = styled.button`
  width: 80%;
  height: 10%;
  background: ${props => props.register ? '#1A3040' : '#5D99C4'};
  font-size: 20px;
  color: #FFF;
  border: none;
  &:hover {
    background: ${props => props.register ? '#A353CE' : '#065d77'};
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