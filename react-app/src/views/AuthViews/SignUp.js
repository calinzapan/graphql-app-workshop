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
import { compose } from 'redux';
import { withApollo, graphql } from 'react-apollo';
import { SIGN_IN_MUTATION } from '../../graphql/mutations'
import { navigate } from '@reach/router/lib/history';

const SignUp = (props) => {
  const doSignUp = (inputData) => {
    props.client.mutate({
      mutation: SIGN_IN_MUTATION,
      variables: {
        ...inputData
      }
    })
    navigate('/dashboard');
  }
  const { inputs, handleInputChange, handleSubmit } = useForm({
    firstName: '',
    name: '',
    email: '',
    password: ''
  }, doSignUp);
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
            value={inputs.firstName}
            onChange={handleInputChange}
            required={true}
          />
          <FormGroup
            type="text"
            label="Last Name"
            placeholder="Doe"
            name="name"
            value={inputs.name}
            onChange={handleInputChange}
            required={true}
          />
        </div>

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
        <Anchor href="/">Already have an account?</Anchor>
      </FormContainer>
      <Logo></Logo>
    </Container>
  );
}
export default compose(
  withApollo,
  graphql(SIGN_IN_MUTATION)
)(SignUp);
