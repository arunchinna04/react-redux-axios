import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';




import createBrowserHistory from 'history/lib/createBrowserHistory';
//import configureStore from './store';



//const history = new createBrowserHistory();
//const store = configureStore();


import Routes from './config/routes'; 
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// function loadData() {
// 	store.dispatch(fetchData('https://restcountries.eu/rest/v1/all'));
// };

// //we expect this to fail and get forwarded to the error page
// function loadBadData(){
// 	store.dispatch(fetchData('https://restcountries.eu/rest/v1/callingcode/123123'));
// };

ReactDOM.render(
	
		  <Routes />
	,
	document.getElementById('root')
);


// <ReduxRouter>
// 			<Route history={history}>
// 				<Route component={App}>
// 					<Route path='/' component={Home} />
// 					<Route path='/countries' component={Countries} onEnter={loadData} />
// 					<Route path='/othercountry' component={ExpectedError} onEnter={loadBadData} />
// 					<Route path='/error' component={Error} />
// 				</Route>
// 			</Route>
// 		</ReduxRouter>