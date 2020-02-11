import React from 'react'
import RecipeCard from './RecipeCard'

export default function RecipeCollection({recipes, recipeAction}) {

const renderRecipes = recipes.map(recipe => {
    return(
        <RecipeCard recipe={recipe} recipeAction={recipeAction} />
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