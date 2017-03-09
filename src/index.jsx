import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory } from 'react-router';
// import ReactStormpath, { Router, AuthenticatedRoute, LoginLink } from 'react-stormpath';
// Components
import App from './App.jsx';
import ProductForm from './components/ProductForm.jsx';
import UserRegister from './components/UserRegister.jsx';
import LoginForm from './components/LoginForm.jsx';
import NotFound from './components/NotFound.jsx';

import Products from './containers/Products.jsx';
import Bags from './containers/Bags.jsx';
import Shoes from './containers/Shoes.jsx';
import Jeweleries from './containers/Jeweleries.jsx';
import Accessories from './containers/Accessories.jsx';
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
        // ---------------- Routes for Nav bar ------------------
        <Route path="/bags" component={Bags} />                  //
        <Route path="/shoes" component={Shoes} />                //
        <Route path="/jeweleries" component={Jeweleries} />          //   
        <Route path="/accessories" component={Accessories} />    //
    // ============================================================

        <Route path="/product/:product_id" component={ProductDetails} />
        <Route path="/add/new_product" component={ProductForm} />
        <Route path="/cart/:id" component={ShoppingCart} />

    // ------------------- User Sign/Log In ------------------------
        <Route path="/sign_up" component={UserRegister} />        //
        <Route path="/login" component={LoginForm} />             //
        <Route path="/profile/:id" component={UserProfile} />     //
    //==============================================================  
    
        <Route path="*" component={NotFound} />
      </Route>
    </Router>,
    document.getElementById('app')
  )