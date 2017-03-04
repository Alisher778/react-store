import React, {Component} from 'react';
import $ from 'jquery';


class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {user: {id: '0', first_name: 'Ali', last_name: 'Ali', password: 'password'}}
  }

  render() {
    return(
      <div className="user-profile">
        <p>{this.state.user.first_name}</p>
        <p>{this.state.user.last_name}</p>
        <p>{this.state.user.password}</p>
      </div>
    )
  }
}

export default UserProfile;