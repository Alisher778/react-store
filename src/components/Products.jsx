import React, { Component } from 'react';
import { Link } from 'react-router';
import { createStore } from 'redux';
import axios from 'axios';
import $ from 'jquery';



export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {products: [{
      id: 1, name: "Hello", image: "someUrl", price: 20
    }]}
  }

  componentDidMount() {
    $.get('/api/products', function(data){
      this.setState({products: data})

    }.bind(this))
  }


  postNewProduct(event){
    event.preventDefault();

    $.ajax({
      url: "/api/new_product",
      type: "POST",
      data: $('form').serialize(),
      sucess: function(data){
        console.log(data)
      },
      error: function(err){
        console.error(err)
      }
    })
    
  }
  
  render() {
    return(
      <div>
        <ul>
          {this.state.products.map((product, i)=>{
            return(
                <li key={i}>
                  <Link to={`/api/product/${product.id}`}>
                    <img src={product.image} alt={product.name} />
                    <div>{product.name}</div>
                    <div>${product.price}</div>
                  </Link>
                </li>
              )
          })}
          
        </ul>
        <form action="/api/new_product" method="post" encType="multipart/form-data" onSubmit={this.postNewProduct.bind(this)}>
          <input type="text" name="name" id="name" />
          <input type="file" name="image" id="image" />
          <input type="text" name="info" id="info" />
          <input type="text" name="price" id="price" />
          <button type="submit">ADD</button>
        </form>
      </div>
    )
  }
}