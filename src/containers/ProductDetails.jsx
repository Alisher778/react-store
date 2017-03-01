import React, {Component} from 'react';
import $ from 'jquery';

class ProductDetails extends Component{

  constructor(props) {
    super(props);
    this.state = {product:{id:'', name:'', info: '', image: '', price: ''}}
  }

  componentDidMount(){
    $.get(`/api/product/${this.props.params.product_id}`, function(data){
      console.log(data)
      this.setState({
        product: {id: data.id, name: data.name, info: data.info, image: data.image, price: data.price}
      });
      console.log(this.state.product)
    }.bind(this))
  }

  render() {
    return(
      <div>
        <div className="image-container">
          <img src={this.state.product.image} alt={this.state.product.name} />
        </div>
        <div className="product-info">
          <h3>{this.state.product.image}</h3>
          <p>{this.state.product.info}</p>
          <p>{this.state.product.price}</p>
          <button className="buy-button">BUY</button>
        </div>
      </div>
    )
  }
}

export default ProductDetails