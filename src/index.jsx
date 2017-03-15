import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory } from 'react-router';
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
import EditProductDetail from './containers/EditProductDetail.jsx';

import ShoppingCart from './containers/ShoppingCart.jsx';
import UserProfile from './containers/UserProfile.jsx';
import SearchBar from './features/SearchBar.jsx';



render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Products} />
        // ---------------- Routes for Nav bar ------------------
        <Route path="/bag" component={Bags} />                  //
        <Route path="/shoe" component={Shoes} />                //
        <Route path="/jewelery" component={Jeweleries} />          //   
        <Route path="/accessory" component={Accessories} />    //
    // ============================================================

        <Route path="/product/:product_id" component={ProductDetails} />
        <Route path="/product/:product_id/edit" component={EditProductDetail} />
        <Route path="/add/new_product" component={ProductForm} />
        <Route path="/cart/:id" component={ShoppingCart} />
        <Route path="/search" component={SearchBar} />

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