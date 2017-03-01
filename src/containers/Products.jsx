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


  postProduct(){
      $("form").submit(function(){
       
      var formData = new FormData($(this)[0]);

      $.ajax({
          url: '/api/new_product',
          type: 'POST',
          data: formData,
          success: function (data) {
              console.log(data)
          },
          cache: false
      });
          return false;
      });
  }
  
  render() {
    return(
      <div>
        <ul>
          {this.state.products.map((product, i)=>{
            return(
                <li key={i} className="products-list">
                  <Link to={`/api/product/${product.id}`} >
                    <img src={product.image} alt={product.name} />
                    <div>{product.name}</div>
                    <div>${product.price}</div>
                  </Link>
                </li>
              )
          })}
          
        </ul>
        <form action="/api/new_product" method="post" onSubmit={this.postProduct()} encType="multipart/form-data">
          <p><input type="text" name="name" id="name" /></p>
          <p><input type="file" name="image" id="image" /></p>
          <p><input type="text" name="info" id="info" /></p>
          <p><input type="text" name="price" id="price" /></p>
          <button type="submit">ADD</button>
        </form>
      </div>
    )
  }
}