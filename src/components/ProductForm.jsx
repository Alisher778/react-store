import  React, { Component } from 'react';
import TinyMCEInput from 'react-tinymce-input';
import $ from 'jquery';

export default class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ""}
  }
  
  onChange(newValue) {
    this.setState({ value: newValue });
  }
  onTextAreaChange(e) {
    this.setState({ value: e.target.value });
  }
 
  render() {
    return(
      <div className="new-products-form">
        <form action="/api/new_product" method="post" encType="multipart/form-data">
          <div className="form-items"><label>Name:</label><input type="text" name="name" id="name" placeholder="Product title"/></div>
          <div className="form-items"><label>Price:</label><input type="text" name="price" id="price" placeholder="price in USD"/></div>
          <div className="form-items"><label>Category:</label>
            <select className="category" name="category">
              <option value="bag">Handbag</option>
              <option value="shoe">Shoes</option>
              <option value="jewelery">Jewelry</option>
              <option value="accessory">Accessories</option>
            </select>
          </div>
          <div className="form-items">
            <label>Details:</label>
             <TinyMCEInput value={this.state.value} onChange={this.onChange.bind(this)} tinymceConfig={{
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
              <textarea id="text" type="hidden" name="description" value={this.state.value} onChange={this.onTextAreaChange.bind(this)} cols={1} rows={2} >{this.state.value}</textarea>
              </div>
          <div className="form-items button"><button type="submit">ADD NEW PRODUCT</button></div>
        </form>
      </div>
    )
  }
}
