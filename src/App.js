import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import Nav from './Nav'
import './App.scss';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <Nav />
        </header>
        <div className="botanica-landing">
          <h1>Welcome to botánica</h1>
          <h3><Link className="login-link" to='/login'>Login</Link> | <Link className="register-link" to='/Register'>Sign Up</Link></h3>
        </div>
      </>
    );
  }
}

export default App;
