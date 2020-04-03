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

const SignUp = () => {
  const doLogin = (inputData) => {
    // implement login
    console.log(inputData);
  }
  const { inputs, handleInputChange, handleSubmit } = useForm({
    firstName: '',
    name: '',
    email: '',
    password: ''
  }, doLogin);
  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Title>Hello!</Title>
        <Subtitle>Let's create your account!</Subtitle>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <FormGroup
            type="text"
            label="First Name"
            placeholder="Jane"
            name="firstName"
            values={inputs.firstName}
            onChange={handleInputChange}
            required={true}
          />
          <FormGroup
            type="text"
            label="Last Name"
            placeholder="Doe"
            name="name"
            values={inputs.name}
            onChange={handleInputChange}
            required={true}
          />
        </div>

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
        <Anchor href="/">Already have an account?</Anchor>
      </FormContainer>
      <Logo></Logo>
    </Container>
  );
}
export default SignUp;
