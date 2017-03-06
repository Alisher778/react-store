import React, {Component} from 'react';
import $ from 'jquery';


class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {user: {id: '1',
                          first_name: 'Ali',
                          last_name: 'Ali',
                          password: 'password',
                          email: 'example@eaxmple.com',
                          password: 'password',
                          avatar: 'https://s3.amazonaws.com/my-final-store/users/avatar.png'
                        },
                  address: {id: '1',
                            full_name: 'Admin Admin',
                            street: '2060 E205 Ave',
                            apartment: '1K',
                            city: 'Brooklyn',
                            state: 'NY', zip: '11011',
                            country: 'United States of America',
                            phone: '888-000-7777',
                            note: 'Be aware of the dog'
                          },
                  }
  }

  componentDidMount() {
    $.get(`/users/api/user/${this.props.params.id}`, function(data){
      this.setState({user: {id: data.id, first_name: data.first_name, last_name: data.last_name, email: data.email, password: data.password, avatar: data.avatar}});
    }.bind(this));

    $.get(`/users/api/user/address/${this.state.user.id}`, function(data){
      console.log(data)
      this.setState({address: data[0]});
    }.bind(this))
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
        <p>{this.state.user.email}</p>
        <p>{this.state.user.password}</p>
        <p><img src={this.state.user.avatar} alt={this.state.user.first_name} style={{width: "100px"}}/></p>
        
        <div className="address-details">
          <p>{this.state.address.full_name}</p>
          <p>{this.state.address.street}</p>
          <p>{this.state.address.apartment}</p>
          <p>{this.state.address.city}</p>
          <p>{this.state.address.state}</p>
          <p>{this.state.address.zip}</p>
          <p>{this.state.address.country}</p>
          <p>{this.state.address.phone}</p>
          <p>{this.state.address.note}</p>
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
        <div className="add-address">
          <button onClick={this.addAddress.bind(this)}>Add Address</button>
        </div>
      </div>
    )
  }
}

export default UserProfile;