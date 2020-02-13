import React, {Component} from 'react'

class RecipeForm extends Component {

    state = {
        title: '',
        image: '',
        ingredients: '',
        instructions: '',
        notes: '',
        favotite: false,
        likes: 0
    }

    componentDidMount() {
        this.setState({
            title: this.props.title,
            image: this.props.image,
            ingredients: this.props.ingredients,
            instructions: this.props.instructions,
            notes: this.props.notes,
            favotite: this.props.favotite,
            likes: this.props.likes,
        })
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.recipeAction(this.state)
        this.setState({
            title: '',
            image: '',
            ingredients: '',
            instructions: '',
            notes: '',
            favotite: false,
            likes: 0
        })
    }

    render() { 
        return (
            <form className="new-recipe-form" onSubmit={this.handleSubmit}>
                <h2>Add new herbal recipe</h2>
                <input 
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                />
                <input 
                name="image"
                value={this.state.image}
                onChange={this.handleChange}
                />
                <input 
                name="ingredients"
                value={this.state.ingredients}
                onChange={this.handleChange}
                />
                <input 
                name="instructions"
                value={this.state.instructions}
                onChange={this.handleChange}
                />
                <input 
                name="notes"
                value={this.state.notes}
                onChange={this.handleChange}
                />
                <input 
                name="favorite"
                value={this.state.favorite}
                onChange={this.handleChange}
                />
                <input 
                name="likes"
                value={this.state.likes}
                onChange={this.handleChange}
                />
                <input type="submit" />
            </form>
          );
    }
}
 
export default RecipeForm;