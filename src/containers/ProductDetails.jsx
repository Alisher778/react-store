import React, {Component} from 'react';
import $ from 'jquery';
import TinyMCEInput from 'react-tinymce-input';
import axios from 'axios';

class ProductDetails extends Component{

  constructor(props) {
    super(props);
    this.state = {product:{id:'', name:'', description: '', image: '', price: ''}, isLoggedIn: false};
  }

  componentDidMount(){
    $.get(`/api/product/${this.props.params.product_id}`, function(data){
      this.setState({
        product: data
      });
    }.bind(this));
    
    if(this.props.id() !== 0 && this.props.id() !== undefined && this.props.id() !== null){
      this.setState({isLoggedIn: true})
    }
  }

  
  addToCart(){

    if(this.state.isLoggedIn){
      const selectedProduct = {
        user_id: this.props.id(),
        product_id: this.state.product.id,
        product_name: this.state.product.name,
        product_image: this.state.product.image,
        product_info: this.state.product.info,
        product_price: this.state.product.price,
        product_quantity: $('.select-quantity').val(),
        product_color: $('.select-color').val()
      }
      const url = `/users/api/cart/${this.props.id()}/${this.state.product.id}`;
      
      axios.post(url, selectedProduct)
        .then(function(data){
          this.props.incrementCart();
      }.bind(this)).catch(function(error){
        console.log(error)
      })
    }else{
      
      $('nav').after("<h1 id='msg'>You must be log in<h1>");
      $('#msg').fadeOut(4000);
      window.location.href= "/sign_up"
      return;
    }
    
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
             
              <div dangerouslySetInnerHTML={{ __html: this.state.product.description }} />
              
            </div>

          </div>
          
            <div className="side-bar">
              <p>{this.state.product.price}</p>
              <div className="quantity">Quantity: 
                <select className="select-quantity">
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
                <select className="select-color">
                  <option value="select-color">Select Color</option>
                  <option value="black">Black</option>
                  <option value="white">White</option>
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                </select>
              </div>
              <button className="buy-button" onClick={this.addToCart.bind(this)}>BUY</button>
              <button><a href={`/api/product/delete/${this.state.product.id}`}>DELETE</a></button> 
            </div>
        </div>
      </div>
    )
  }
}

export default ProductDetails