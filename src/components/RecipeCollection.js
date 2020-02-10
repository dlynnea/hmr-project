import React from 'react'
import RecipeCard from './RecipeCard'

export default function RecipeCollection({recipes}) {

const renderRecipes = recipes.map(recipe => {
    return(
        <RecipeCard recipe={recipe} />
    )
})

    return(
        <div className="recipe-container">
            <div>
                {renderRecipes}
            </div>
        </div>
    )
}