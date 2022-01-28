import React from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';

const Nav=() => {
    return (
        <nav>
            <h3> 		&#128214;</h3>
            <ul className="nav-links ">

                <Link className='links' to='/Shop'>   <li> Shop </li></Link>
                <Link className='links' to='/Favorites'>  <li>  ❤ Favorites</li></Link>
            </ul>
        </nav>
    );
};

export default Nav;
