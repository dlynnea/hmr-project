import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
// import Home from './Home'
// import Profile from './Profile'
// import Login from './Login'
// import Register from './Register'
import Nav from './Nav'
// import RecipeSearch from './RecipeSearch'
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
