import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Products extends Component {
  
  getProductsList(){
   return this.props.products.map((product)=>{
      return <li key={product.id}>{product.id}</li>
    })
   
  }

  render() {
    return(
    <ul>
        {this.getProductsList()}
    </ul>
    )
  }
}

function mapStateToProps(state) {
  return{
    products: state.products
  }
}


export default connect(mapStateToProps)(Products);
