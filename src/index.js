import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Home from './Home'
import Profile from './Profile'
import Login from './Login'
import Register from './Register'
import RecipeSearch from './RecipeSearch'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Router>
    <Route component={App} />
    <Route path='/' exact render={Home} />
    <Route path='/profile' component={Profile}/>
    <Route path='/login' component={Login}/>
    <Route path='/search' component={RecipeSearch}/>
    <Route path='/register' component={Register}/>
</Router>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
