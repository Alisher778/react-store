import React, {Component} from 'react';
import $ from 'jquery';

class ProductDetails extends Component{

  constructor(props) {
    super(props);
    this.state = {product:{id:'', name:'', info: '', image: '', price: ''}}
  }

  componentDidMount(){
    $.get(`/api/product/${this.props.params.product_id}`, function(data){
      this.setState({
        product: {id: data.id, name: data.name, info: data.info, image: data.image, price: data.price}
      });
    }.bind(this))
  }

  render() {
    return(
      <div className="product-details">
        <h1>{this.state.product.name}</h1>
        <div className="product-container">
          <div className="product-info">
            
            <div className="product-image">
              <img src={this.state.product.image} alt={this.state.product.name} />
            </div>
            
            <div className="product-description">
              <h3>{this.state.product.name}</h3>
              <p>{this.state.product.info}</p>
              <div>JBL Flip 3 Splashproof Wireless Bluetooth Speaker
Blast your favorite tunes anywhere with this portable Bluetooth speaker, which plays music straight from your smartphone without making you fiddle with cords or safety harnesses. It belts out your favorite albums for up to 10 hours, letting you hang out all day before needing to recharge the built-in battery.

Wireless Audio
Thanks to multipoint Bluetooth connectivity, the Flip 3 has the power to connect wirelessly up to three devices at once, letting your friends share DJ duties without sharing cord-wrangling responsibilities.

Rugged Design
A tough housing of thick rubber and durable fabric keep the speaker safe at outdoor parties or trips to the beach. The device’s splash-proof shell is durable enough to withstand both everyday roughhousing and nearby cannonball jumps into the pool.

</div>
            </div>

          </div>
          
            <div className="side-bar">
              <p>{this.state.product.price}</p>
              <div className="quantity">Quantity: 
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div className="color" aria-label="select-color">
                <select>
                  <option value="select-color">Select Color</option>
                  <option value="black">Black</option>
                  <option value="white">White</option>
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                </select>
              </div>
              <button className="buy-button">BUY</button>
              <button><a href={`/api/product/delete/${this.state.product.id}`}>DELETE</a></button> 
            </div>
         
        </div>
      </div>
    )
  }
}

export default ProductDetails