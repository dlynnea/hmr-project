import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import RecipeCollection from './RecipeCollection'

export default function PrivateRoute(props) {
    return(
        <Route {...props} render={() => {
            return localStorage.token
            ? (
                <>
                <RecipeCollection recipes={props.recipes} />
                </>
            )
            : <Redirect to='/login' />
        }} />
    )
}
