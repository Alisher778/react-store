import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';


export default class App extends Component {

  render() {
    return(
      <div>
        <nav>
          <div className="logo">
            <li id="logo"><Link to="/" activeClassName="active">Home</Link></li>
          </div>
          <div className="nav-list">
            <li><Link to="/products" activeStyle={{ color: 'red' }}>Products</Link></li>
            <li><Link to="/cart/:user_name" activeStyle={{ color: 'red' }}>Shooping Cart</Link></li>
            <li><Link to="/sign_up" activeStyle={{ color: 'red' }}>Sign Up</Link></li>
            <li><button><Link to="/add/new_product" activeStyle={{ color: 'red' }}>Add Product</Link></button></li>
            <li><Link to="/profile/:name" activeStyle={{ color: 'red' }}>User</Link></li>
          </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
}