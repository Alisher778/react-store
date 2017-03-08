import React, { Component } from 'react';
import $ from 'jquery';
import StripeCheckout from 'react-stripe-checkout';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {items: [{
      id: '',
      user_id: '0',
      product_id: '0',
      product_name: 'Iphone 6 plus',
      product_image: "https://s3.amazonaws.com/my-final-store/products/product.jpg",
      product_info: 'some info',
      product_quantity: 2,
      product_color: 'black',
      product_price: 699
    }], payment :{name: "Hello.", description: "Big Data Stuff", image: "https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png", amount: 1, email: "info@vidhub.co"}}

  }

  componentDidMount() {
    $.get(`/users/api/cart/${this.props.id()}`, function(data){
      this.setState({
        items: data
      });
    }.bind(this))
  }
  onToken(token){
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }



  render() {
    return(
      <div>
        <h1>Your have {this.state.items.length} item(s) in your cart!</h1>
        { this.state.items.map((item)=>{
            return(
              <div key={item.id}>
                <ul className="item-details">
                  <li className="image-src" id={item.product_name}>
                    <img src={item.product_image} alt="product default image" />
                  </li>
                  <li id={item.product_id}>
                    <ul className="product-details">
                      <li id={item.product_name}>{item.product_name}</li>
                      <li id={item.product_quantity}><span>{item.product_quantity} </span></li>
                      <li id={item.product_color}><span>{item.product_color} </span></li>
                    </ul>
                  </li>
                  <li id={item.product_price}>
                    <div>Unit Price: ${item.product_price}</div>
                    <div><b>Total:</b> ${item.product_price * item.product_quantity}</div>
                    <StripeCheckout
                      token={this.onToken}
                      stripeKey={process.env.StripePK}
                      name={item.product_name}
                      description={item.product_info}
                      image={item.product_image}
                      panelLabel="Pay"
                      amount={item.product_price * item.product_quantity * 100}
                      currency="USD"
                      locale="auto"
                      email="your_email@mail.com"
                    />
                  </li>
                </ul>
                <a href={`/users/api/cart/${item.id}/delete`}>Remove</a>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default ShoppingCart;