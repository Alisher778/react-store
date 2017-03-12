import React, { Component } from 'react';
import { Link } from 'react-router';
import { createStore } from 'redux';
import axios from 'axios';
import $ from 'jquery';




export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {products: [{
      id: 0, name: "", image: "", price: 0, category: ''
    }], num1: 0, num2: 2, maxProduct: 0}

  }

  componentDidMount() {
    const index1 = this.state.num1;
    const index2 = this.state.num2;

    $.get('/api/products/bag', function(data){
      this.setState({products: data.slice(index1,index2), maxProduct: data.length})
    }.bind(this));
  }
  
  onClickEvent(e){
    e.preventDefault();
    const index1 = e.target.dataset.index1;
    const index2 = e.target.dataset.index2;
    
    this.setState({num1: this.state.num1+2, num2: this.state.num2+2})
    
    $.get('/api/products', function(data){
      this.setState({products: data.slice(index1,index2)})
    }.bind(this));
  }  

  // Pagination exampple
  printButton(e){

    let buttons = [];
    for(let i = 0; i < this.state.maxProduct /2; i++){
            const num1 = i*1;
            const num2 = num1 + 2;
            buttons.push(<li onClick={this.onClickEvent.bind(this)} id={`btn-${i+1}`} data-index1={num1} data-index2={num2}>{i+1}</li>)
          }
    return(
      <ul className="pagination">
        <li id="prevBtn" data-index1="" data-index2="" onClick={this.onClickEvent.bind(this)}><i className="fa fa-angle-double-left" aria-hidden="true"></i></li>
        {buttons}
        <li id="lastBtn" onClick={this.onClickEvent.bind(this)}><i className="fa fa-angle-double-right" aria-hidden="true"></i></li>
      </ul>
      )
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
          
          {this.printButton()}
      </div>
    )
  }
}