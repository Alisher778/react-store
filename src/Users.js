import React, {Component} from 'react';
import $ from 'jquery';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {users: []}
  }
  loadUser(){
    $.get('/api/users', function(data){
      this.setState({
        users:data
      })
    }.bind(this))
  }
  render() {
    return(
      <div>
      <ul>
        {this.state.users.map((user)=>{
          return <li>{user.id}: {user.first_name}</li>
        })}
      </ul>
       <button onClick={this.loadUser.bind(this)}>Load</button>
      </div>
    )
  }
} 

export default Users;