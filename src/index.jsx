import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
// Components
import App from './App.jsx';
import Products from './containers/Products.jsx';

render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Products} />
        <Route path="/products" component={Products} />
        <Route path="/api/product/:product_id" component={Products} />
      </Route>
    </Router>,
    document.getElementById('app')
  )