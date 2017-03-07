import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import $ from 'jquery';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={id: 0, items: 0}
    console.log(this.state.id)
  }

  componentDidMount() {
    $.ajax({
      url: '/users/username',
      success: (data)=>{
        this.setState({id: data.username});
        console.log(this.state)
        $.get(`/users/api/cart/${this.state.id}`, (data)=>{
          this.setState({items: data.length})
        })
      }
    })
  }

  incrementCart(){
    this.setState({
      items: this.state.items + 1
    })
  }
  
  getCurrentUserId(){
    return this.state.id;
  }


  render() {
    return(
      <div>
        <nav>
          <div className="logo">
            <li id="logo"><Link to="/" activeClassName="active">Home</Link></li>
          </div>
          <div className="nav-list">
            <li><Link to="/products" activeStyle={{ color: 'red' }}>Products</Link></li>
            <li><Link to={`/cart/${this.state.id}`} activeStyle={{ color: 'red' }}>Shooping Cart {this.state.items}</Link></li>
            <li><Link to="/sign_up" activeStyle={{ color: 'red' }} className="sign-up">Sign Up</Link></li>
            <li><button><Link to="/add/new_product" activeStyle={{ color: 'red' }}>Add Product</Link></button></li>
            <li><Link to={`/profile/${this.state.id}`} activeStyle={{ color: 'red' }}>User</Link></li>
            <li><a href="/users/logout">Log Out</a></li>
          </div>
        </nav>
        {this.props.children && React.cloneElement(this.props.children, {
              incrementCart: this.incrementCart.bind(this),
              id: this.getCurrentUserId.bind(this)
            })}
            <form action="/users/api/login" method="post">
              <p><label>Email:</label><input type="text" name="email"/></p>
              <p><label>password:</label><input type="tpassword" name="password"/></p>
              <button>Log in</button>
            </form>
      </div>
    )
  }
}