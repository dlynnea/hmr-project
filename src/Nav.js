import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class Nav extends Component {

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
                    <Link to='/search'><i class="fa fa-search"></i></Link>
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