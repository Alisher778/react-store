import  React, { Component } from 'react';
import TinyMCEInput from 'react-tinymce-input';
import $ from 'jquery';

export default class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {id: '', name: '', price: '', description: '', category: '', image: ''}
  }

  componentDidMount() {
    $.get(`/api/product/${this.props.params.id}`, (data)=>{
      this.setState(data)
    })

  }
  
  onFormChange(e){
     
    this.setState({name: e.target.value})
  } 
 
  render() {
    return(
      <div className="new-products-form">
        <form action={`/api/product/edit/${this.state.id}`} method="post" encType="multipart/form-data" >
          <div className="form-items"><label>Name:</label><input type="text" onChange={this.onFormChange.bind(this)} name="name" id="name" placeholder="Product title"/></div>
          <div className="form-items"><label>Image:</label><input type="file" name="image" id="image" /></div>
          <div className="form-items"><label>Price:</label><input type="text" name="price" id="price" placeholder="price in USD" /></div>
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
             <TinyMCEInput value={this.state.description}  tinymceConfig={{
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
              <textarea id="text" type="hidden" name="description" value={this.state.description}  cols={1} rows={2} >{this.state.description}</textarea>
              </div>
          <div className="form-items button"><button type="submit">ADD NEW PRODUCT</button></div>
        </form>
      </div>
    )
  }
}


