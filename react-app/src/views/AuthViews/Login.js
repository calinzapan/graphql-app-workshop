import React from 'react';
import { Button, FormGroup } from '../../components/index';
import useForm from '../../hooks/useForm';
import {
  Container,
  FormContainer,
  Title,
  Logo,
  Subtitle,
  Anchor
} from './styles';

const Login = () => {
  const doLogin = (inputData) => {
    // implement login
    console.log(inputData);
  }
  const { inputs, handleInputChange, handleSubmit } = useForm({
    email: '',
    password: ''
  }, doLogin);
  return (
    <Container>
      <Logo></Logo>
      <FormContainer onSubmit={handleSubmit}>
        <Title>Welcome</Title>
        <Subtitle>Login to your account</Subtitle>
        <FormGroup
          type="email"
          label="Email Address"
          placeholder="jane@doe.com"
          name="email"
          values={inputs.email}
          onChange={handleInputChange}
          required={true}
        />
        <FormGroup
          type="password"
          label="Password"
          name="password"
          values={inputs.password}
          onChange={handleInputChange}
          required={true}
        />
        <Button
          type="submit"
          label="Login" />
        <Anchor href="/sign-up">You can also sign up here.</Anchor>
      </FormContainer>
    </Container>
  );
}
export default Login;
