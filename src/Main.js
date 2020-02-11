import React, {Component} from 'react'
import RecipeCollection from './components/RecipeCollection'
import RecipeSearch from './RecipeSearch'
import RecipeSpec from './components/RecipeSpec'

class Main extends Component {

    state = {
        recipes: [],
        searchTerm: "",
        singleRecipe: null,
    }

    componentDidMount() {
        fetch('http://localhost:3000/recipes')
        .then(response => response.json())
        .then(recipes => this.setState({
          recipes: recipes
        }))
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
    
    render() { 
        return (
            <div>
                <RecipeSearch 
                searchTerm={this.state.searchTerm}
                handleChange={this.handleChange}
                 />
                 {this.state.singleRecipe 
                 ? <RecipeSpec 
                 recipe={this.state.singleRecipe}
                 renderRecipeCollection={this.renderRecipeCollection}
                 />
                : <RecipeCollection 
                recipes={this.filteredRecipes()} 
                recipeAction={this.showSpec}
                />
                }
            </div>
          );
    }
}
 
export default Main;