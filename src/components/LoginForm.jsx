import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Payment from './Payment.jsx';
import TinyMCE from 'react-tinymce';

class LoginForm extends Component {
  


  render() {
    return(
      <div>
        <form action="/users/api/login" method="post">
          <p><label>Email:</label><input type="text" name="email"/></p>
          <p><label>password:</label><input type="tpassword" name="password"/></p>
          <button>Log in</button>
        </form>
        
      </div>
      )
  } 
}

export default LoginForm;