import React, { Component} from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-react-router';
import { Provider } from 'react-redux';

import App from '../containers/App';
import Countries from '../components/Countries';
import Error from '../components/Error';
import ExpectedError from '../components/ExpectedError';
import Home from '../components/Home';
import Login from '../components/Login';
import DashBoard from '../components/DashBoard';
import configureStore from '../store';
const store = configureStore();
import {fetchData} from '../actions/actions';


function loadData() {
  store.dispatch(fetchData('https://restcountries.eu/rest/v1/all'));
  console.log('complete')
  
};

//we expect this to fail and get forwarded to the error page
function loadBadData(){
  store.dispatch(fetchData('https://restcountries.eu/rest/v1/callingcode/123123'));
};

function loadMenu(){
  store.dispatch(fetchData('http://localhost:8011/menu'));
}

class Root extends Component {

  render() {
    return (
      <Provider store={store}>  
        <ReduxRouter>
            <Route history={browserHistory}>
                <Route path="/" component={Login} />
                <Route  path="/app" component={App} onEnter={loadMenu}>
                    <IndexRoute component={DashBoard}/>
                    <Route path='students' component={Home} />
                    <Route path='countries' component={Countries} onEnter={loadData} />
                    <Route path='othercountry' component={ExpectedError}  onEnter={loadBadData}/>
                    <Route path='error' component={Error} />
                </Route>
                <Route path="*" component={Error} status={404}/>
                
               
                                 
               


            </Route>
        </ReduxRouter>
      </Provider>  
    );
  }
}

export default Root;







