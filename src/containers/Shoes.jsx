import React, { Component } from 'react';
import { Link } from 'react-router';
import { createStore } from 'redux';
import axios from 'axios';
import $ from 'jquery';



export default class Shoes extends Component {
  constructor(props) {
    super(props);
    this.state = {products: [{
      id: 1, name: "Hello", image: "someUrl", price: 20, category: ''
    }]}
  }

  componentDidMount() {
    $.get('/api/products/shoe', function(data){
      this.setState({products: data})

    }.bind(this));
  }

  deleteProduct(event){
    event.preventDefault();
    let productId = $('')
    $.ajax({
    url: `/api/product/delete/`,
    type: 'DELETE',
    success: function(result) {
        console.log(result)
      }
    });
  }
  
  render() {
    return(
      <div>
        <ul className="all-products">
          {this.state.products.map((product, i)=>{
            return(
                <li key={i} className="products-list">
                  <Link to={`/product/${product.id}`} >
                    <img src={product.image} alt={product.name} />
                    <div className="product-name">{product.name}</div>
                    <div className="product-price">${product.price}</div>
                  </Link>
                </li>
              )
          })}
        </ul>
      </div>
    )
  }
}