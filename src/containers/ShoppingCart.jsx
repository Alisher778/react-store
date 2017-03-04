import React, { Component } from 'react';


class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {items: [{
      userid: '1',
      productId: '2',
      name: 'Iphone 6 plus',
      image: "https://s3.amazonaws.com/my-final-store/products/product.jpg",
      quantity: 2,
      color: 'black',
      price: 699
    }]}

  }
  render() {
    return(
      <div>
        <h1>Hello {this.props.params.user_name}. Your Items in the cart!</h1>
        { this.state.items.map((item)=>{
            return(
              <div>
                <ul className="item-details">
                  <li className="image-src" key={item.image}>
                    <img src={item.image} alt="product default image" />
                  </li>
                  <li key={item.productId}>
                    <ul className="product-details">
                      <li key={item.name}>{item.name}</li>
                      <li key={item.quantity}><span>{item.quantity} </span></li>
                      <li key={item.color}><span>{item.color} </span></li>
                    </ul>
                  </li>
                  <li key={item.price}>
                    ${item.price}
                  </li>
                </ul>
                <a href="/delete/this/item">Remove</a>
              </div>
            )
          })
        }
        
      </div>
    )
  }
}

export default ShoppingCart;