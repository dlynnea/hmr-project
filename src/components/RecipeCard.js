import React from 'react'

const RecipeCard = (props) => {
    const {recipe} = props;

    return(
        <section className="recipe">
        <div className="ui card">
            <h2 className="title">{recipe.title}</h2>
            <span>
                <i className="fa fa-pencil"></i>
                <i className="fa fa-times-circle"></i>
            </span>
            <img src={recipe.image} />
            <h4 className="ingredient-card">{recipe.ingredients}</h4>
            <p className="instruction-card">{recipe.instructions}</p>
            <p className="note-card">{recipe.notes}</p>
        </div>
    </section>
    )
}

export default RecipeCard;