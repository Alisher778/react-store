import React, {Component} from 'react';
import $ from 'jquery';
import Products from '../containers/Products';

class ProductsList extends Component {
  render() {
    return(
      <div className="products-list" >
        <h1>Producsts are coming soon...</h1 >
        <Products />
      </div>
    )
  }
}

export default ProductsList;