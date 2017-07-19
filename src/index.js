import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import requireAuth from './components/req_authentication';
import App from './components/App';
import Resources from './components/Resources';
import reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';
import './index.css'; 



 
const store = 
//applyMiddleware()(createStore);
createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
	<Provider store={store}>
	  <Router history={browserHistory}>
        <Route path="/" component={App} >
          <Route path="/resources" component={requireAuth(Resources)} />
        </Route>  
      </Router>
	</Provider>, 
	document.getElementById('root')
);

registerServiceWorker();
 