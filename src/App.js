import React, {Component} from 'react';
import {Link} from 'react-router';
import './app.css';

export default class App extends Component{
  render() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/new/users">CONTACT</Link></li>
          </ul>
        </header>
        {this.props.children}
      </div>
    );
  }
}
