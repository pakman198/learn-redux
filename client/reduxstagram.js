import React from 'react';
import ReactDOM from 'react-dom';

import css from './styles/style.styl';

// Import components
import App from './components/App';
import Photogrid from './components/Photogrid';
import Single from './components/Single';


// Import react router deps
import { ReactRouter as Router, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'

import { Provider } from 'react-redux';
import store, {history} from './store'

const router =  (
	<Provider store={store} >
		<ConnectedRouter history={history}>
			<App>
				<Switch>
					<Route path="/" exact component={Photogrid}></Route>
					<Route path="/view/:postId" component={Single}></Route>
				</Switch>
			</App>
		</ConnectedRouter>
	</Provider>
);

ReactDOM.render(router, document.getElementById('root') );