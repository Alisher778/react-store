import React, {Component} from 'react';
import $ from 'jquery';

class ProductsList extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {products: [{a: 'b'}]}
    
  // }

  // componentDidMount(){
  //   $.get('/api/products', function(data){
  //      this.setState({products: data});
  //      console.log(data)
  //   }.bind(this))
   
  // }
  // componentWillUpdate(nextProps, nextState) {
  //   console.log(this.state.products)
  // }
  render() {
    return(
      <div className="products-list" >
      {console.log(this.props)}
        <ul>
          <h1>Producsts are coming soon...</h1 >
          <h2>Name</h2>
          <img src="" alt=""/>
          <p>Description</p>
          <span>Price:</span>
        </ul>
      </div>
    )
  }
}

export default ProductsList;