import React, {Component} from 'react';
import $ from 'jquery';


class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {user: {id: '1',
                          first_name: '',
                          last_name: '',
                          password: '',
                          email: '',
                          password: '',
                          avatar: ''
                        },
                  address: [{
                            id: '',
                            user_id: '',
                            full_name: '',
                            street: '',
                            apartment: '',
                            city: '',
                            state: '', 
                            zip: '',
                            country: '',
                            phone: '',
                            note: ''
                          }],
                  }
  }

  componentDidMount() {
    $.get(`/users/api/user/${this.props.params.id}`, function(data){
      this.setState({user: data});
    }.bind(this));

    $.get(`/users/api/user/address/${this.props.params.id}`, function(data){
      console.log(data)
      this.setState({address: data});
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
        
        { this.state.address.map((address)=>{
          return(
              <div className="address-details" key={address.id}>
                <p>{address.full_name}</p>
                <p>{address.street}</p>
                <p>{address.apartment}</p>
                <p>{address.city}</p>
                <p>{address.state}</p>
                <p>{address.zip}</p>
                <p>{address.country}</p>
                <p>{address.phone}</p>
                <p>{address.note}</p>
              </div> 
            )
        })}
        
        
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