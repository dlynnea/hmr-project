import React from 'react'

const RecipeSearch = (props) => {

    return (
        <form>
            <input
            className="recipe-search-box"
            type="text"
            placeholder="Find a Recipe"
            value={props.searchTerm}
            onChange={props.handleChange}
            />
        </form>
    );
}
 
export default RecipeSearch;