import React, {Component} from 'react';
import {RegistrationForm} from 'react-stormpath';

class RegistrationPage extends Component{
  render() {
    return(
        <div>
          <h1>Login</h1>
          <RegistrationForm />
        </div>
      )
  }
}

export default RegistrationPage;