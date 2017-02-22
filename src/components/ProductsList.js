import React, {Component} from 'react';
import $ from 'jquery';
import Products from '../containers/Products.jsx';
import {Link} from 'react-router';

class ProductsList extends Component {
 constructor(props) {
   super(props);

 this.state = {products: [{a: 'b'}]}

 }
 
 componentDidMount(){
   $.get('/api/products', function(data){
      this.setState({products: data});
   }.bind(this))
  }

  render() {
    return(
      <div className="products-list" >
        {this.state.products.map((products, i)=>{
          return (
              <li key={i}>
                <Link to={`/product/${products.id}`}>{products.name}</Link>
                {this.props.children}
              </li>
            )
        })}
       <Products />
      </div>
    )
  }
}

export default ProductsList;