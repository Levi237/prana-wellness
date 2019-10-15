import React       from 'react';
import { NavLink } from 'react-router-dom';

import * as routes from '../constants/routes'

const Nav = () => 
    <div className="open nav-container">

        <NavLink activeClassName="nav-active" to={routes.HOME}>HOME</NavLink>
        <NavLink activeClassName="nav-active" to={routes.INFO}>ABOUT</NavLink>

    </div>

export default Nav