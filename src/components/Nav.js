import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import * as routes from '../constants/routes';

export default class Nav extends Component {


    render(){
        const { toggleHamburger } = this.props;
        
        return(
            <div id="menu" className="nav-container inactive">
                <div>
                    <button className="close xClose" onClick={() => {toggleHamburger()}}>
                         CLOSE X
                    </button>
                    <br /><br /><br /><br />
                    <NavLink activeClassName="nav-active" to={routes.HOME} onClick={() => {toggleHamburger()}}>HOME</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.INFO} onClick={() => {toggleHamburger()}}>ABOUT US</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.SERV} onClick={() => {toggleHamburger()}}>WELLNESS SERVICES</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.CORP} onClick={() => {toggleHamburger()}}>CORPORATE WELLNESS</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.WELL} onClick={() => {toggleHamburger()}}>PERSONAL WELLNESS</NavLink>
                </div>

            </div>
        );
    };
};