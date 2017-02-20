import React, {Component} from 'react';

export default class Contact extends Component {
  render() {
    return(
    <div>
      <form action="/users" method="post">
        <p><label htmlFor="">First Name</label> <input type="text" name="firstName" id="firstName"/></p>
        <p><label htmlFor="">Last Name</label><input type="text" name="lastName" id="lastName"/></p>
        <p><label htmlFor="">Bio</label><input type="text" name="bio" id="bio"/></p>
        <button type="submit">Send</button>
      </form>
    </div>
    );
  } 
}