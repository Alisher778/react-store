import React, { Component } from 'react';
import $ from 'jquery';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {items: [{
      id: 0,
      user_id: '1',
      product_id: '2',
      product_name: 'Iphone 6 plus',
      product_image: "https://s3.amazonaws.com/my-final-store/products/product.jpg",
      product_info: 'some info',
      product_quantity: 2,
      product_color: 'black',
      product_price: 699
    }]}

  }

  componentDidMount() {
    $.get(`/users/api/cart/${this.props.params.id}`, function(data){
      this.setState({
        items: data
      });
    }.bind(this))
  }
  render() {
    return(
      <div>
        <h1>Hello {this.props.params.user_name}. Your have {this.state.items.length}Items in the cart!</h1>
        { this.state.items.map((item)=>{
            return(
              <div>
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
                    ${item.product_price}
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