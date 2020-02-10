import React from 'react'

const RecipeSearch = (props) => {

    return (
        <span>
        <form>
            <input
            className="recipe-search-box"
            type="text"
            placeholder="Find a Recipe"
            value={props.searchTerm}
            onChange={props.handleChange}
            />
        </form>
        </span>
    );
}
 
export default RecipeSearch;