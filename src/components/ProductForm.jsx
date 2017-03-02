import  React, { Component } from 'react';


class ProductForm extends Component {
  render() {
    return(
      <div className="new-products-form">
        <form action="/api/new_product" method="post" encType="multipart/form-data">
          <div className="form-items"><label>Name:</label><input type="text" name="name" id="name" placeholder="Product title"/></div>
          <div className="form-items"><label>Image:</label><input type="file" name="image" id="image" /></div>
          <div className="form-items"><label>Price:</label><input type="number" name="price" id="price" placeholder="price in USD"/></div>
          <div className="form-items"><label>Details:</label><textarea  rows="6" cols="50" type="text" name="info" id="info" placeholder="Product details"></textarea ></div>
          <div className="form-items button"><button type="submit">ADD NEW PRODUCT</button></div>
          
        </form>
      </div>
    )
  }
}


export default ProductForm;