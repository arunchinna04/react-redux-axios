import React, {Component} from 'react';
import { browserHistory } from 'react-router';

import { pushState } from 'redux-react-router';
import {connect} from 'react-redux';
import { TextField,  RaisedButton } from 'material-ui';

@connect(state => ({routerState: state.router, example: state.example }))
class Login extends Component{

   login(e) {
    e.preventDefault();
    const email = this.refs.email.getValue();
    const pass = this.refs.pass.getValue(); //console.log('login',email);
    const data = {'email':email,'password':pass};
    console.log(data)
   // browserHistory.push('/app')
    this.props.dispatch(pushState(null,'/app'));
   //this.props.dispatch(push(null,'/app'));
 // this.props.dispatch(push(null,'/error'));



  }

    render() {
        return (
            <div>
           <h1><span className="fa fa-sign-in"></span>Login</h1>
           <form>
             <TextField  hintText="Email" floatingLabelText="Email" ref="email"/><br/>
             <TextField  hintText="Password" floatingLabelText="Password" ref="pass"/><br/>
             <RaisedButton label="Login" onTouchTap={this.login.bind(this)} primary={true} />
           </form>
        </div>
        )
    }
};

export default Login;