import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import App from './App';
import './app.css';
import Contact from './Contact';
import Users from './Users';
import Products from './Products';
import ProductsList from './components/ProductsList';
import {createStore} from 'redux';
import reducers from './reducers'


const store = createStore(reducers);


render(
  <Provider store={store}> 
		<Router history={browserHistory}>
			<Route path="/" component={App}>
        <IndexRoute component={ProductsList} />
        <Route path="/users" component={Users}/>
        <Route path="/products" component={Products}/>
        <Route path="/new/users" component={Contact}/>
      </Route>
		</Router>
	</Provider>
	, document.getElementById('app'));