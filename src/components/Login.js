import React, {Component} from 'react';
import { browserHistory } from 'react-router';

import { push } from 'redux-react-router';
import {connect} from 'react-redux';

@connect(state => ({routerState: state.router, example: state.example }))
class Login extends Component{

   login(e) {
    e.preventDefault();
    const email = this.refs.email.value;
    const pass = this.refs.pass.value //console.log('login',email);
    const data = {'email':email,'password':pass};
  //  browserHistory.push('/app')
//console.log(push)
   //this.props.dispatch(push(null,'/app'));
  this.props.dispatch(push(null,'/error'));



  }

    render() {
        return (
            <div>
               <h1><span className="fa fa-sign-in"></span>Login</h1>
               <form>
                  <input type="text" ref="email"/>
                  <input type="password" ref="pass"/>
                  <button onClick={this.login.bind(this)}>Click</button>
               </form>
            </div>
        )
    }
};

export default Login;