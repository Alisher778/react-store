import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
// Components
import App from './App.jsx';
import Products from './components/Products.jsx';

render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/products" component={Products} />
      </Route>
    </Router>,
    document.getElementById('app')
  )