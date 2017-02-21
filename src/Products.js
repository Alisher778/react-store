import React, {Component} from 'react';

class Products extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return(
      <div>Hello
        <form action="/api/new_product" method="post" encType="multipart/form-data">
          <p><label htmlFor="">Name</label><input type="text" name="name" /></p>
          <p><label htmlFor="">Image</label><input type="file" name="image" multiple="true"/></p>
          <p><label htmlFor="">Description</label><input type="text" name="description" /></p>
          <p><label htmlFor="">Price</label><input type="number" name="price" /></p>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default Products;