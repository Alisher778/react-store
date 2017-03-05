import React, {Component} from 'react';
import $ from 'jquery';


class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {user: {id: '1', first_name: 'Ali', last_name: 'Ali', password: 'password'}}
  }

  addAddress(){
    $('.add-address').click(function(e){
      e.preventDefault();
      $('.address-hidden').toggle();
      
    })
  }

  
  render() {
    return(
      <div className="user-profile">
        <p>{this.state.user.first_name}</p>
        <p>{this.state.user.last_name}</p>
        <p>{this.state.user.password}</p>
        
        <div className="add-address">
          <button onClick={this.addAddress.bind(this)}>Add Address</button>
        </div>
        <div className="address-hidden">
          <form action={`/users/api/user/${this.state.user.id}/address`} method="post">
            <p><label>Full Name</label><input type="text" name="full_name" /></p>
            <p><label>Street</label><input type="text" name="street" /></p>
            <p><label>Apartment/suit</label><input type="text" name="apartment" /></p>
            <p><label>City</label><input type="text" name="city" /></p>
            <p><label>State</label><input type="text" name="state" /></p>
            <p><label>Zip/Postal</label><input type="text" name="zip" /></p>
            <p><label>Country</label><input type="text" name="country" /></p>
            <p><label>Phone</label><input type="text" name="phone" /></p>
            <p><label>Notes</label><textarea type="text" name="note"></textarea></p>
            <p><button type="submit">Add Address</button></p>
          </form>
        </div>
      </div>
    )
  }
}

export default UserProfile;