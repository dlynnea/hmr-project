import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import Nav from './Nav'

class Login extends Component {

  state = {
    username: '',
    password: '',
  }

  onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.login(this.state, this.props.history)
    }

  render() {

    return (
      <>
      <form className="login-form" onSubmit={this.handleSubmit}>
          <h2>Login Here</h2>
        <input
          name='username'
          placeholder='Username'
          value={this.state.username}
          onChange={e => this.onChange(e)}
           />
        <input
          name='password'
          placeholder='Password'
          type='password'
          value={this.state.password}
          onChange={e => this.onChange(e)}
           />
        <input type="submit" value="Login" />
        <p><Link className="register-link" to='/register'>Need to Create an Account?</Link></p>
      </form>
    </>
    );
  }
}
 
export default Login;