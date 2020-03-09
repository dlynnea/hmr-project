import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import RecipeCollection from './RecipeCollection'
import RecipeSpec from './RecipeSpec'

export default function PrivateRoute(props) {

    console.log("props", props)
    return <Route {...props} render={(routerProps) => {
            return localStorage.token
            ? (
                <> 
                    <RecipeSpec 
                    {...routerProps}
                    recipe={props.singleRecipe}
                    renderRecipeCollection={props.renderRecipeCollection}
                    />
                    <RecipeCollection 
                    {...routerProps}
                    recipes={props.recipes} 
                    deleteRecipe={props.deleteRecipe}
                    recipeAction={props.showSpec}
                    />
                </>
            )
            : <Redirect to='/login' />
        }} />
}
