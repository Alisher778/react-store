import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
// Components
import App from './App.jsx';
import Products from './containers/Products.jsx';
import ProductDetails from './containers/ProductDetails.jsx';
import ProductForm from './components/ProductForm.jsx';

render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Products} />
        <Route path="/products" component={Products} />
        <Route path="/product/:product_id" component={ProductDetails} />
        <Route path="/add/new_product" component={ProductForm} />
      </Route>
    </Router>,
    document.getElementById('app')
  )