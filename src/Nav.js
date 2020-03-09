import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import RecipeSearch from './RecipeSearch'
import Profile from './Profile'
import HerbalCollection from './HerbalCollection'


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
                    <Link to='/home'><i class="fa fa-home"></i></Link>
                </li>
                <li>
                    <Link to='/profile' ><i class="fa fa-user-circle"></i></Link>
                </li>
                <li>
                     <Link to='/herbals'><i class="fa fa-leaf"></i></Link>
                </li>
                <li className="logo">
                    botánica <i class="fa fa-pagelines"></i>
                </li>
            </ul>
            </nav>
         );
    }
}
 
export default Nav;