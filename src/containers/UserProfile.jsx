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
      $('.address-hidden').toggle();
  }

  closeAddress(){
    $('.address-hidden').toggle();
  }

  
  render() {
    return(
      <div className="user-profile">
        <div className="user-info">
          <div className="user-profile-img">
            <img src={this.state.user.avatar} alt={this.state.user.first_name} />
          </div>
          <div className="user-detail">
            <h3>{this.state.user.first_name} {this.state.user.last_name}</h3>
            <p><i className="fa fa-envelope-o" aria-hidden="true"></i>{this.state.user.email}</p>
          </div>
          <div className="user-address">
            { this.state.address.map((address)=>{
              return(
                <div className="address-details" key={address.id}>
                  <span><b>{address.full_name}</b></span>
                  <span>{address.street}</span>
                  <span>{address.apartment}</span>
                  <span>{address.city}</span>
                  <span>{address.state}</span>
                  <span>{address.zip}</span>
                  <span>{address.country}</span>
                  <span><i>Phone number:</i> {address.phone}</span>
                  <span><i>Special note:</i> {address.note}</span>
                  <a href={`/users/api/user/address/${address.id}/delete`}>Delete</a>
                </div> 
              )
            })}
          </div>
          <div className="add-address">
            <button onClick={this.addAddress.bind(this)}>Add New Address</button>
          </div>
        </div>        
        
        <div className="address-hidden">
          <button className="close-address" onClick={this.closeAddress.bind(this)}>X</button>
          <form action={`/users/api/user/${this.state.user.id}/address`} method="post">
            <p><input type="text" name="full_name" placeholder="Full Name" /></p>
            <p><input type="text" name="street" placeholder="Street"/></p>
            <p><input type="text" name="apartment" placeholder="Apartment
            "/></p>
            <p><input type="text" name="city" placeholder="City"/></p>
            <p><input type="text" name="state" placeholder="State" /></p>
            <p><input type="text" name="zip" placeholder="Zip/Postal code" /></p>
            <p><input type="text" name="country" placeholder="Country" /></p>
            <p><input type="text" name="phone" placeholder="Phone"/></p>
            <p><textarea type="text" name="note" placeholder="Special Notes"></textarea></p>
            <p><button type="submit">Add Address</button></p>
          </form>
        </div>
      </div>
    )
  }
}

export default UserProfile;