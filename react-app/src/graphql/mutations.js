import gql from 'graphql-tag';


const SIGN_IN_MUTATION = gql`
  mutation createUserMutation(
    $firstName: String!,
    $name: String!,
    $email: String!,
    $password: String!,
  ) {
    createUser(data: {
      firstName: $firstName
      name: $name
      email: $email
      password: $password
    }) {
      user {
        id
      }
      token
    }
  }
`

const LOGIN_MUTATION = gql`
  mutation loginMutation($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      user {
        id
        name
        firstName
      }
      token
    }
  }
`

export {
  SIGN_IN_MUTATION,
  LOGIN_MUTATION
}
