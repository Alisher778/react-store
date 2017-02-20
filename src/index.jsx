import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import App from './App';
import Contact from './Contact';
import Users from './Users';
import Products from './Products';


render(
		<Router history={browserHistory}>
			<Route path="/" component={App}>
        <IndexRoute component={Users} />
        <Route path="/users" component={Users}/>
        <Route path="/products" component={Products}/>
        <Route path="/new/users" component={Contact}/>
      </Route>
		</Router>
	
	, document.getElementById('app'));