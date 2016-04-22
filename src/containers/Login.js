import React, {Component} from 'react';
import Router, {Link} from 'react-router';
import {connect} from 'react-redux';
import LoginContainer from '../components/Login';


@connect(state => ({routerState: state.router, example: state.example }))
class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   
    return (
        <LoginContainer />
      
    );
  }
}

export default Login;