import React, {Component} from 'react';
import $ from 'jquery';

class ShowProduct extends Component {
  constructor(props) {
   super(props);

    this.state = {products: {
                              id: 0,
                              name: "BAg2",
                              description: "NiceBag",
                              image: ["hello", "something"]
                            }
                }

 }
 
 componentDidMount(){
     $.get(`/api/product/${this.props.params.id}`, function(data){
        this.setState({products: 
          {
            id: data.id,
            name: data.name,
            description: data.description,
            image: data.image.split(',')
          }
        });
        console.log("hello ---", this.state.products)
     }.bind(this))
  }

  printImages(){
    const images = this.state.products.image;
    images.map((image)=>{
      return(<img src="jkjk" alt="hjh"/>)
    })

  }
  render() {
    return(
      <div className="products-list" >
        <ul>
          <p onClick={this.printImages.bind(this)}>{this.state.products.image[0]}</p>
          <a href={`/api/product/delete/${this.state.products.id}/${this.state.products.image}`}>DELETE</a>
        </ul>
      </div>
    )
  }
}

export default ShowProduct;