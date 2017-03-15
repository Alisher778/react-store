import React, {Component} from 'react';
import $ from 'jquery';
import TinyMCEInput from 'react-tinymce-input';
import axios from 'axios';
import {Link, browserHistory} from 'react-router';


export default class EditProductDetail extends Component{

  constructor(props) {
    super(props);
    this.state = {id:'', name:'', description: '', image: '', price: '', category: ''};
  }

  componentDidMount(){
    $.get(`/api/product/${this.props.params.product_id}`, function(data){
      console.log(data)
      this.setState({
        id: data.id, name: data.name, image: data.image, price: data.price, description: data.description, category: data.category
      });
    }.bind(this))
  }

  onNameChange(e){
   
    this.setState({name: e.target.value})
    console.log(this.state)
  }

  onPriceChange(e){
        this.setState({price: e.target.value})
        console.log(this.state)
  }

  onCategoryChange(e){
    this.setState({category: e.target.value})
  }
  onChange(e) {
    this.setState({description: e})
    console.log(this.state)
  }

  render() {
    return(
      <div className="edit-product-details">
        <form action={`/api/product/${this.state.id}/edit`} method="post" encType="multipart/form-data" >
        <div className="edit-product"><label>Name:</label><input  onChange={this.onNameChange.bind(this)} value={this.state.name} type="text" name="name" id="name" placeholder="Product title"/></div>
          <div className="edit-product">
            
            <div className="edit-product-img">
              <img src={this.state.image} />
              <div><label>Image:</label><input type="file" name="image" id="image" /></div>
            </div>
            
            <div><label>Price:</label><input type="text" onChange={this.onPriceChange.bind(this)} value={this.state.price}name="price" id="price" placeholder="price in USD"/></div>
            <div><label>Category:</label>
            <select className="category" name="category" onChange={this.onCategoryChange.bind(this)}value={this.state.category} >
              <option value="bag">Handbag</option>
              <option value="shoe">Shoes</option>
              <option value="jewelery">Jewelry</option>
              <option value="accessory">Accessories</option>
            </select>
          </div>
            <div>
            <label>Details:</label>
            <TinyMCEInput value={this.state.description} onChange={this.onChange.bind(this)} tinymceConfig={{
                'language'  : 'en',
                'theme'     : 'modern',
                'toolbar'   : 'bold italic underline strikethrough hr | bullist numlist | link unlink | undo redo | spellchecker code',
                'menubar'   : false,
                'statusbar' : true,
                'resize'    : true,
                'plugins'   : 'link,spellchecker,paste',
                'theme_modern_toolbar_location' : 'top',
                'theme_modern_toolbar_align': 'left'
              }} />
             <textarea id="text" type="hidden" name="description" value={this.state.description} cols={0} rows={0} >{this.state.description}</textarea>
              </div>
          </div>
        <button className="edit-btn">Update</button>
        </form>
      </div>
    )
  }
}
