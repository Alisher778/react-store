import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Payment from './Payment.jsx';
import TinyMCE from 'react-tinymce';
import $ from 'jquery';

class LoginForm extends Component {

  onFormSubmit(e){
      
  }

  render() {
    return(
      <div className="login-form">
        <h2>Log In</h2>
        <form action="/users/api/login" method="post" onSubmit={this.onFormSubmit}>
          <div className="input-wrap"><input type="text" placeholder="email" name="email"/><i className="fa fa-key" aria-hidden="true"></i></div>
          <div className="input-wrap"><input type="password" placeholder="Password" name="password" /><i className="fa fa-envelope-o" aria-hidden="true"></i></div>
          <button>Log in</button>
        </form>
      </div>
      )
  } 
}

export default LoginForm;