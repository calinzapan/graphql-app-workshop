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
import { withApollo, graphql } from 'react-apollo';
import { LOGIN_MUTATION } from '../../graphql/mutations';
import { compose } from 'redux';

const Login = (props) => {
  const doLogin = (inputData) => {
    props.client.mutate({
      mutation: LOGIN_MUTATION,
      variables: {
        ...inputData
      }
    })
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
          value={inputs.email}
          onChange={handleInputChange}
          required={true}
        />
        <FormGroup
          type="password"
          label="Password"
          name="password"
          value={inputs.password}
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
export default compose(
  withApollo,
  graphql(LOGIN_MUTATION)
)(Login);
