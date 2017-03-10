import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import $ from 'jquery';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={id: 0, items: 0, isLoggedIn: false}
    console.log(this.state.id)
  }

  componentDidMount() {
    $.ajax({
      url: '/users/username',
      success: (data)=>{
        console.log('username id -- ', data.username)
        this.setState({id: data.username});
          if(data.username !== 0 && data.username !== undefined && data.username !== null){
            this.setState({isLoggedIn: true})
          }
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
  // ************* Set CurrentUser Id Globally ************************
  getCurrentUserId(){
    return this.state.id;
  };

 // ************** Check if a User Logged in *************************
  isLoggedInFunc(){
    if(this.state.isLoggedIn){
      return(
        <li>
          <a href="/users/logout" id="log-out-btn" >Log Out</a>
        </li>
      )
    }else{
      return(
          <ul className="auth-links">
            <li><Link to="/sign_up" className="sign-up">Sign Up</Link></li>
            <li><Link to="/login" className="sign-up">Log In</Link></li>
          </ul>
        )
    }
  }

  // *********** Check if CurrentUser is Admin ***************************
  isAdmin(){
    if(this.state.id == 1){
      return(
          <ul className="admin-btn">
            <li>
              <Link to="/add/new_product">
                <i className="fa fa-plus" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        )
    }
  }

  redirectUrl(){
    if(!this.state.isLoggedIn){
      window.location.href= "/sign_up"
    }
  }

  render() {
    return(
      <div>
        <nav>
          <div className="logo">
            <li ><Link to="/" activeClassName="active" id="logo">Rstore</Link></li>
          </div>
          <div className="nav-list">
            <li><Link to="/accessory">Accessories</Link></li>
            <li><Link to="/bag">Bags</Link></li>
            <li><Link to="/shoe">Shoes</Link></li>
            <li><Link to="/jewelery">Jeweleries</Link></li>
          </div>
          <ul className="user-bar">
            <ul className="user-cart">
              <li><Link to={`/cart/${this.state.id}`} onClick={this.redirectUrl.bind(this)}><i className="fa fa-shopping-cart" aria-hidden="true"></i><span className="cart-number">{this.state.items}</span></Link></li>
              <li><Link to={`/profile/${this.state.id}`} onClick={this.redirectUrl.bind(this)}><i className="fa fa-user-circle-o" aria-hidden="true"></i></Link></li>
            </ul>
            {this.isLoggedInFunc()}
            {this.isAdmin()}
          </ul>
          
        </nav>
        {this.props.children && React.cloneElement(this.props.children, {
              incrementCart: this.incrementCart.bind(this),
              id: this.getCurrentUserId.bind(this)
            })}
            
      </div>
    )
  }
}