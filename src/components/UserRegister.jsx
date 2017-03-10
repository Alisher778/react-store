import React, { Component } from 'react';
import {Link, browserHistory} from 'react-router';
import $ from 'jquery';

class UserRegister extends Component {
  handlClick(e){
    e.preventDefault();
    let firstName = $('input').attr('name', 'firstName').val();
    let lastName = $('input').attr('name', 'lastName').val();
    let userName = firstName + lastName
    browserHistory.push(`/cart/${id}`);
  };

  render() {
    return(
      <div className="sign-up-page">
        <h2>Sign Up</h2>
        <form action="/users/api/register" method="post" encType="multipart/form-data">
          <p>
            <input type="text" name="firstName" placeholder="First Name" />
          </p>
          <p>
            <input type="text" name="lastName" placeholder="Last Name" />
          </p>
          <p>
            <input type="email" name="email" placeholder="Email" />
          </p>
          <p>
            <input type="password" name="password"  placeholder="Password" />
          </p>
          <p>
            <input type="file" name="avatar" />
          </p>
          <button type="submit">SIGN UP</button>
        </form>
      </div>
    )
  }
}

export default UserRegister;