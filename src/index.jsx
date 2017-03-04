import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory } from 'react-router';
// import ReactStormpath, { Router, AuthenticatedRoute, LoginLink } from 'react-stormpath';
// Components
import App from './App.jsx';
import ProductForm from './components/ProductForm.jsx';
import UserRegister from './components/UserRegister.jsx';
import Products from './containers/Products.jsx';
import ProductDetails from './containers/ProductDetails.jsx';
import ShoppingCart from './containers/ShoppingCart.jsx';
import UserProfile from './containers/UserProfile.jsx';

// ReactStormpath.init({
//   endpoints: {
//     baseUri: 'https://react-store.apps.stormpath.io'
//   }
// });

render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Products} />
        <Route path="/products" component={Products} />
        <Route path="/product/:product_id" component={ProductDetails} />
        <Route path="/add/new_product" component={ProductForm} />
        <Route path="/cart/:user_name" component={ShoppingCart} />
        <Route path="/sign_up" component={UserRegister} />
        <Route path="/profile/:name" component={UserProfile} />
      </Route>
    </Router>,
    document.getElementById('app')
  )