import React, { Component } from 'react';
import {Link, browserHistory} from 'react-router';
import $ from 'jquery';

class UserRegister extends Component {
  handlClick(e){
    e.preventDefault();
    let firstName = $('input').attr('name', 'firstName').val();
    let lastName = $('input').attr('name', 'lastName').val();
    let userName = firstName + lastName
    browserHistory.push(`/cart/${userName}`);
  };

  render() {
    return(
      <div>
        <form action="/users/api/register" method="post" encType="multipart/form-data">
          <p>
            <label >First Name:</label><input type="text" name="firstName" />
          </p>
          <p>
            <label >Last Name:</label><input type="text" name="LastName" />
          </p>
          <p>
            <label >Email:</label><input type="email" name="email" />
          </p>
          <p>
            <label >Password:</label><input type="password" name="password" />
          </p>
          <p>
            <label >Avatar:</label><input type="file" name="avatar" />
          </p>
          <button type="submit">SIGN UP</button>
        </form>
      </div>
    )
  }
}

export default UserRegister;