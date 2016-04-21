import React, {Component} from 'react';
import { TextField,  RaisedButton } from 'material-ui';

class Login extends Component{

   login(e) {
    e.preventDefault();
    console.log(this)
    const email = this.refs.email.getValue();
    const pass = this.refs.pass.getValue //console.log('login',email);
      const data = {'email':email,'password':pass};
   console.log('lo',data)
  }

    render() {
        return (
            <div>
               <h1><span className="fa fa-sign-in"></span>Login</h1>
               <form>
                  <input type="text" ref="email"/>
                  <input type="password" ref="pass"/>
                  <button onClick={this.login}>Click</button>
               </form>
            </div>
        )
    }
};

export default Login;