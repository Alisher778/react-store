import React, {Component} from 'react';
import {LoginForm} from 'react-stormpath';

class LoginPage extends Component{
  render() {
    return(
        <div>
          <h1>Login page</h1>
          <LoginForm />
        </div>
      )
  }
}

export default LoginPage;