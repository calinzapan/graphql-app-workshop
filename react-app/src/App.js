import React from 'react';
import { Router } from '@reach/router';
import { SignUp, Dashboard, Login } from './views/index';
import Theme from './App.styles';
function App() {
  return (
    <>
      <Theme />
      <Router>
        <Login path="/" />
        <SignUp path="/sign-up" />
        <Dashboard path="/dashboard" />
      </Router>
    </>
  );
}
export default App;
