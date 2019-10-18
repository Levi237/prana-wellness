import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import * as routes from '../constants/routes'

const divStyle = {
    background: '#744A9E',
    color: '#FFF',
};

export default class Nav extends Component {


    render(){
        const { toggleHamburger } = this.props

        
        return(
            <div id="menu" className="nav-container inactive" style={divStyle}>
                <div>
                    <button className="close xClose" onClick={() => {toggleHamburger()}}>
                         CLOSE X
                    </button>
                    <br /><br /><br /><br />
                    <NavLink activeClassName="nav-active" to={routes.HOME} onClick={() => {toggleHamburger()}}>HOME</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.INFO} onClick={() => {toggleHamburger()}}>ABOUT</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.WELL} onClick={() => {toggleHamburger()}}>WELLNESS</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.CORP} onClick={() => {toggleHamburger()}}>CORPORATE WELLNESS</NavLink>
                </div>

            </div>
        )
    }
}