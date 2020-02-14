// import React, {Component} from 'react'
// import {BrowserRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom";
// import RecipeCollection from './components/RecipeCollection'
// import RecipeSearch from './RecipeSearch'
// import RecipeSpec from './components/RecipeSpec'
// import Login from './Login';
// import Nav from './Nav'
// // import Main from './Main'
// import './App.scss';

// class Main extends Component {

//     state = {
//         recipes: [],
//         searchTerm: "",
//         singleRecipe: null,
//         loggedIn: false
//     }

//     componentDidMount() {
//         fetch('http://localhost:3000/recipes')
//         .then(response => response.json())
//         .then(recipes => this.setState({
//           recipes: recipes
//         }))
//       }

//     handleChange = (event) => {
//         this.setState({ searchTerm: event.target.value })
//     }

//     filteredRecipes = () => {
//         return this.state.recipes.filter(recipe => {
//             return recipe.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
//         })
//     }

//     showSpec = (recipe) => {
//         this.setState({
//             singleRecipe: recipe
//         })
//     }

//     renderRecipeCollection = () => {
//         this.setState({
//             singleRecipe: null
//         })
//     }

//     changeLoginState = () => {
//         this.setState({
//             loggedIn: !this.state.loggedIn
//         })
//     }
    
//     render() { 
//         return (
//             <div>        
//                 <header>
//                     <Nav />
//                 </header>
//                 <body>
//                 {/* <Router> */}
//                     {/* <Route path='/' component={Login} /> */}
//                     {/* {this.state.loggedIn ? <Redirect to="/" /> : <Redirect to="/register" />} */}
//                 {/* </Router> */}

//                 <div className="botanica-landing">
//                     <h1>Welcome to botánica</h1>
//                     <Switch>
//                     <Route path='/' render={(props) => (
//                         <>
//                         <Main />
//                         </>
//                     )} />
//                     </Switch>
//                     <Route path='/login' component={Login} />
//                     <h3><Link className="login-link" to='/login'>Login</Link> | <Link className="register-link" to='/Register'>Sign Up</Link></h3>
//                 </div>

//                 <RecipeSearch 
//                 searchTerm={this.state.searchTerm}
//                 handleChange={this.handleChange}
//                  />
//                  {this.state.singleRecipe 
//                  ? <RecipeSpec 
//                  recipe={this.state.singleRecipe}
//                  renderRecipeCollection={this.renderRecipeCollection}
//                  />
//                 : <RecipeCollection 
//                 recipes={this.filteredRecipes()} 
//                 recipeAction={this.showSpec}
//                 />
//                 }
//                 </body>
//             </div>
//           );
//     }
// }
 
// export default Main;