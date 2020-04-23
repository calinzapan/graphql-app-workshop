import React from 'react';
import { Router } from '@reach/router';
import { SignUp, Dashboard, Login } from './views/index';
import Theme from './App.styles';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { split, ApolloClient, InMemoryCache } from 'apollo-client-preset';
import { getMainDefinition } from 'apollo-utilities';
import { ApolloProvider } from 'react-apollo';

const wsLink = new WebSocketLink({
  uri: "wss://eu1.prisma.sh/calinzapan-bbfab7/database/dev",
  options: {
    reconnect: true
  }
});

const httpLink = new HttpLink({
  uri: "http://localhost:4000"
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === "OperationDefinition" && operation === 'subscription'
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Theme />
      <Router>
        <Login path="/" />
        <SignUp path="/sign-up" />
        <Dashboard path="/dashboard" />
      </Router>
    </ApolloProvider>
  );
}
export default App;
