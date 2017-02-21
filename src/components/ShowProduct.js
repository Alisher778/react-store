mport React, {Component} from 'react';
import $ from 'jquery';

class ProductsList extends Component {
  constructor(props) {
    super(props);

    this.state = {products: [{a: 'b'}]}
    console.log(this.props)
    
  }

  componentDidMount(){
    $.get('/api/product/', function(data){
       this.setState({products: data});
       console.log(data)
    }.bind(this))
   
  }
  
  render() {
    return(
      <div className="products-list" >
        <ul>
          <h1>Producsts are coming soon...</h1 >
          {this.state.products.map((item, i)=>{return <li key={i}>{item.name}</li>})}
        </ul>
      </div>
    )
  }
}

export default ProductsList;