import React, {Component} from 'react';

class LoginForm extends Component {
  render() {
    return(
        <form action="/users/api/login" method="post">
          <p><label>Email:</label><input type="text" name="email"/></p>
          <p><label>password:</label><input type="tpassword" name="password"/></p>
          <button>Log in</button>
        </form>
      )
  } 
}

export default LoginForm;