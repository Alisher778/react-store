import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import $ from 'jquery';
import axios from 'axios';


export default class SearchBar extends Component {
  
constructor(props) {
  super(props);
  this.state = {result: []}
}

componentDidMount() {
  $.get('/api/products', (data)=>{
    this.setState({result: data})
  })
  
}

search(term){
  return this.state.result.filter(function(data){
    let name = data.name.toLowerCase().indexOf(term.toLowerCase());
    let cat = data.category.toLowerCase().indexOf(term.toLowerCase());
    let price = data.price.toLowerCase().indexOf(term.toLowerCase());
    let des = data.description.toLowerCase().indexOf(term.toLowerCase());
    let af = [];
    if(name > -1 || cat > -1 || price > -1 || des > -1){
      return data;
    }
  })
}
   
  render() {
    const searchResult = this.search(this.props.search());
    $('')
    return(
        <div className="SearchBar">
          <div className="search-list">
            {searchResult.map((product, i)=>{
             return(
                <li key={i} className="search-product-list">
                  <Link to={`/product/${product.id}`} >
                    <div className="search-img">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="search-product-details">
                      <div className="search-product-name">{product.name}</div>
                      <div className="search-product-price">${product.price}</div>
                    </div>
                  </Link>
                </li>
              )
          })}
          </div>
        </div>
      )
  }
}