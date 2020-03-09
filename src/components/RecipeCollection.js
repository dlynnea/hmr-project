import React from 'react'
import RecipeCard from './RecipeCard'
import RecipeSearch from '../RecipeSearch'

export default function RecipeCollection({recipes, recipeAction, searchTerm, handleChange}) {

const renderRecipes = recipes.map(recipe => {
    return(
        <RecipeCard recipe={recipe} recipeAction={recipeAction} />
    )
})

    return(
        <div className="recipe-container">
            <div>
            <RecipeSearch 
                searchTerm={searchTerm}
                handleChange={handleChange}
                />
                {renderRecipes}
            </div>
        </div>
    )
}