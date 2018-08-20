import { applyMiddleware, createStore, compose } from 'redux';
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'


import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
	posts,
	comments
};

// const enhancers = compose(
// 	window.devToolsExtension ? window.devToolsExtension() : f => f
// );

export const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(rootReducer), // new root reducer with router state
  defaultState,
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ),
)

if(module.hot){
	module.hot.accept('./reducers/', () => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;
