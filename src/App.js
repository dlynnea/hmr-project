import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './Home'
import Profile from './Profile'
import Nav from './Nav'
import RecipeSearch from './RecipeSearch'
import './App.scss';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <Nav />
        </header>
        <body>
        <div className="body">
          <Route path='/' exact render={props => <Home />} />
          <Route path='/profile' component={Profile}/>
          <Route path='/search' component={RecipeSearch}/>
        </div>
        </body>
      </>
    );
  }
}

export default App;
