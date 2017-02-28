import React, {Component} from 'react';
import {Link} from 'react-router';

export default class App extends Component {
  render() {
    return(
      <div>
        <nav>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
        </nav>
        {this.props.children}
      </div>
    )
  }
}