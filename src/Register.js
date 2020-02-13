import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import Nav from './Nav'

class Register extends Component {

  state= {
      user: {
        name: "",
        username: "",
        password: "",
      }
    }

  onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }

    handleSubmit = event => {
        event.preventDefault()
        const userObject = {user: this.state}
        this.props.signup(userObject)
    }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit} className="register-form">
          <h2>Register Here</h2>
        <input
        name='name'
        placeholder='Name'
        value={this.state.name}
        onChange={e => this.onChange(e)} />
        <input
          name='username'
          placeholder='Username'
          value={this.state.username}
          onChange={e => this.onChange(e)} />
        <input
          name='password'
          placeholder='Password'
          type='password'
          value={this.state.password}
          onChange={e => this.onChange(e)} />
        <br />
        <input type="submit" value="Register!" />
        <p><Link className="login-link" to='/login'>Already have an Account?</Link></p>
      </form>
      </>
    );
  }
}

export default Register;