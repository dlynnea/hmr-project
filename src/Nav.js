import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import RecipeSearch from './RecipeSearch'


class Nav extends Component {

    state = {
        isSearchBarShowing: false,
    }

    toggleSearchBar = () => {
        this.setState({
            isSearchBarShowing: !this.state.isSearchBarShowing
        })
    }

    render() { 
        return ( 
            <nav className="nav-bar">
            <ul>
                <li>
                    <Link to='/'><i class="fa fa-home"></i></Link>
                </li>
                <li>
                    <Link to='/profile'><i class="fa fa-user-circle"></i></Link>
                </li>
                <li>
                    {
                        this.state.isSearchBarShowing
                        ? <i onClick={this.toggleSearchBar} class="fa fa-search"></i>
                        : <Link to='/search' component={RecipeSearch}></Link>
                    }
                </li>
                <li className="logo">
                    botánica
                </li>
            </ul>
            </nav>
         );
    }
}
 
export default Nav;