import React from 'react'

export default function RecipeSpec(props) {

const { recipe, renderRecipeCollection } = props

return(
        <section className="recipe-spec">
        <div className="spec">
            <h2 className="title">{recipe.title}</h2>
            <button onClick={() => renderRecipeCollection()}>Back to All recipes</button>
            <button>Edit <i className="fa fa-pencil"></i></button>
            <span>                
                {/* <i className="fa fa-times-circle"></i> */}
            </span>
            <img className="image-spec" src={recipe.image} />
            <h3 className="ingredient-card">{recipe.ingredients}</h3>
            <p className="instruction-card">{recipe.instructions}</p>
            <p className="note-card">{recipe.notes}</p>
        </div>
        </section>
    )
}