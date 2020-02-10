import React, {Component} from 'react'
import RecipeCollection from './components/RecipeCollection'
import RecipeSearch from './RecipeSearch'

class Main extends Component {

    state = {
        recipes: [],
        searchTerm: "",
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
    
    render() { 
        return (
            <div>
                <RecipeSearch 
                searchTerm={this.state.searchTerm}
                handleChange={this.handleChange}
                 />
                <RecipeCollection 
                recipes={this.filteredRecipes()} />
            </div>
          );
    }
}
 
export default Main;