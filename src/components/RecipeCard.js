import React from 'react'

const RecipeCard = (props) => {
    const {recipe, recipeAction} = props;

    return(
        <section className="recipe">
        <div 
        className="ui card"
        key={recipe.id}
        onClick={() => recipeAction(recipe)}
        >
            <h2 className="title">{recipe.title}</h2>
            <span>
                <i className="fa fa-pencil"></i>
                <i className="fa fa-times-circle"></i>
            </span>
            <img src={recipe.image} />
        </div>
    </section>
    )
}

export default RecipeCard;