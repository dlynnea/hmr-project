import React from 'react'

export default function RecipeSpec(props) {

const { recipe, renderRecipeCollection, addLike } = props

return(
        <section className="recipe-spec">
        <div className="spec">
            <h2 className="title">{recipe.title}</h2>
            <button className="recipe-spec-buttons" onClick={() => renderRecipeCollection()}>See all Recipes</button> 
            <button className="recipe-spec-buttons">Edit <i className="fa fa-pencil"></i></button>
            <span>                
                {/* <i className="fa fa-times-circle"></i> */}
            </span>
            <img className="image-spec" src={recipe.image} />
            <h3 className="ingredient-card">{recipe.ingredients}</h3>
            <p className="instruction-card">{recipe.instructions}</p>
            <p className="note-card">Notes: {recipe.notes}</p>
            <p className="likes"><button onClick={addLike}><i class="fa fa-heart"></i></button> {recipe.likes}</p>
        </div>
        </section>
    )
}