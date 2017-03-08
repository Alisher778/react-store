import  React, { Component } from 'react';
import TinyMCEInput from 'react-tinymce-input';
import $ from 'jquery';

class ProductForm extends Component {
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
          <div className="form-items"><label>Image:</label><input type="file" name="image" id="image" /></div>
          <div className="form-items"><label>Price:</label><input type="number" name="price" id="price" placeholder="price in USD"/></div>
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
              <textarea id="text" name="description" value={this.state.value} onChange={this.onTextAreaChange.bind(this)} cols={1} rows={2} >{this.state.value}</textarea>
              </div>
              <div dangerouslySetInnerHTML={{ __html: this.state.value }} />
          <div className="form-items button"><button type="submit">ADD NEW PRODUCT</button></div>
        </form>
      </div>
    )
  }
}


export default ProductForm;