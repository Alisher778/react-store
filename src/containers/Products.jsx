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

    }.bind(this));
  }


  // postProduct(event){
  //   console.log('IN function')
  //     event.preventDefault();
  //     var formData = new FormData(event.target);
  //     console.log(formData)

  //     axios.post('/api/new_product', formData)
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({products: response})
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
          
  // }

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
                    <div>{product.name}</div>
                    <div>${product.price}</div>
                  </Link>
                </li>
              )
          })}
        </ul>
      </div>
    )
  }
}