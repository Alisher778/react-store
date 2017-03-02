import React, {Component} from 'react';
import {Link} from 'react-router';

export default class App extends Component {
  render() {
    return(
      <div>
        <nav>
          <div className="logo">
            <li id="logo"><Link to="/">Home</Link></li>
          </div>
          <div className="nav-list">
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/products">Products1</Link></li>
            <li><button><Link to="/add/new_product">Add Product</Link></button></li>
          </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
}