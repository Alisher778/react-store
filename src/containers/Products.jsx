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
    }], num1: 0, num2: 12, maxProduct: 0}

  }

  componentDidMount() {
    const index1 = this.state.num1;
    const index2 = this.state.num2;

    $.get('/api/products', function(data){
      this.setState({products: data.slice(index1,index2), maxProduct: data.length})
    }.bind(this));

    $('btn-1').addClass('active');
  }
  
  onClickEvent(e){
    e.preventDefault();
    const index1 = e.target.dataset.index1;
    const index2 = e.target.dataset.index2;
    
    $('.pagination li').removeClass('active') 
    $(e.target).addClass('active')

    $.get('/api/products', function(data){
      this.setState({products: data.slice(index1,index2)})
    }.bind(this));
  }  

  // Pagination exampple
  paginationBtn(e){
    let buttons = [];

    for(let i = 0; i < this.state.maxProduct /12; i++){
            const num1 = i*12;
            const num2 = num1 + 12;
            buttons.push(<li onClick={this.onClickEvent.bind(this)} key={i} id={`btn-${i+1}`} data-index1={num1} data-index2={num2} className=''>{i+1}</li>)
          }

          if(this.state.maxProduct > 0){
            return(
              <ul className="pagination">
                <li key={"prevkey"} className="prevBtn"><i className="fa fa-angle-double-left" aria-hidden="true"></i></li>
                {buttons}
                <li key={"lastkey"} className="lastBtn"><i className="fa fa-angle-double-right" aria-hidden="true"></i></li>
              </ul>
            )
          }

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
          {this.paginationBtn()}
      </div>
    )
  }
}