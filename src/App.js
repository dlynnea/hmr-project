import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom";
import RecipeCollection from './components/RecipeCollection'
import RecipeSearch from './RecipeSearch'
import RecipeSpec from './components/RecipeSpec'
import Login from './Login';
import Profile from './Profile';
import Register from './Register';
import Nav from './Nav'
import './App.scss';
import RecipeForm from './components/RecipeForm';
import Logout from './Logout'

class App extends Component {

  state = {
      recipes: [],
      searchTerm: "",
      singleRecipe: null,
      loggedIn: false
  }

 getRecipes = () => {
   const token = localStorage.getItem('token')
   console.log(token)
    fetch('http://localhost:3000/recipes', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(recipes => this.setState({
      recipes: recipes
    }))
  }

  componentDidMount() {
      fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(user => {
        return user.name ? this.setState({recipes: user.recipes}) : null
      })
    }

  handleChange = (event) => {
      this.setState({ searchTerm: event.target.value })
  }

  filteredRecipes = () => {
      return this.state.recipes.filter(recipe => {
          return recipe.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      })
  }

  showSpec = (recipe) => {
      this.setState({
          singleRecipe: recipe
      })
  }

  renderRecipeCollection = () => {
      this.setState({
          singleRecipe: null
      })
  }

  changeLoginState = () => {
      this.setState({
          loggedIn: !this.state.loggedIn
      })
  }

  login = (user, history) => {
    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
      },
        body: JSON.stringify(user)
    }).then(response => response.json())
      .then((result) => {
        localStorage.setItem('token', result.token)
        history.push('/')
        this.getRecipes()
      })
}

signup = (user, history) => {
        
  fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
  }).then(response => response.json())
  .then((newUser) => {
      history.push('/')
      this.getRecipes()
  })
}

addRecipe = (newRecipe) => {
  this.setState({
    recipes: [...this.state.recipes, newRecipe]
  })
}

deleteRecipe = (id) => {
  const recipes = this.state.recipes.map(recipe => {
    return recipe.id !== id
  })
  this.setState({recipes})
}
  
  render() { 
    return (
      <Router>
          <Nav />
            <Switch>      
              <main className="botanica-landing">
                <h1>Welcome to botánica</h1>
                <h3><Link className="login-link" to='/login'>Login</Link> | <Link className="register-link" to='/register'>Sign Up</Link></h3>
                <h3><Link className="login-link" to='/all'>View All Recipes</Link> | <Link className="register-link" to='/profile'>View My Recipes</Link></h3>
                <Logout />
              {/* </div> */}
                <Route exact path='/login' render={(props) => <Login {...props} login={this.login} /> } />
                <Route exact path='/register' render={(props) => <Register {...props} signup={this.signup} /> } />
              {/* <div> */}
              <Route exact path='/' render={(props) => (
                <>
                {/* <RecipeSearch 
                searchTerm={this.state.searchTerm}
                handleChange={this.handleChange}
                /> */}
                <RecipeForm recipeAction={this.addRecipe} />
                {this.state.singleRecipe 
                  ? <RecipeSpec 
                  recipe={this.state.singleRecipe}
                  renderRecipeCollection={this.renderRecipeCollection}
                  />
                  : <RecipeCollection 
                  recipes={this.filteredRecipes()} 
                  deleteRecipe={this.deleteRecipe}
                  recipeAction={this.showSpec}
                  />
                }
                </>
              )} />
                {/* <Route exact path='/profile' component={Profile}/> */}
                {/* <Route exact path='/search' component={RecipeSearch}/> */}
                {/* <Route exact path='/register' component={Register}/> */}
            </main>
          </Switch>
      </Router>
    );
  }
}

export default App;





















// import React, {Component} from 'react';
// import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
// import { Link } from 'react-router-dom';
// import Nav from './Nav'
// import Main from './Main'
// import Login from './Login'
// import './App.scss';

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <header>
//           <Nav />
//         </header>
//         <div className="botanica-landing">
//           <h1>Welcome to botánica</h1>
//           <Switch>
//           <Route path='/' render={(props) => (
//             <>
//               <Main />
//             </>
//           )} />
//           </Switch>
//           <Route path='/login' component={Login} />
//           <h3><Link className="login-link" to='/login'>Login</Link> | <Link className="register-link" to='/Register'>Sign Up</Link></h3>
//         </div>
//       </Router>
      
//     );
//   }
// }

// export default App;
