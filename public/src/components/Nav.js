import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import * as routes from '../constants/routes'

export default class Nav extends Component {

    // onClose = (e) => {
    //     this.props.onClose && this.props.onClose(e);
    // }

    render(){
        const { toggleHamburger } = this.props
        // if (!this.props.showNav){
        //     return null;
        // }
        
        return(
            <div id="menu" className="nav-container inactive">
                <div>
                    <button className="close xClose" onClick={() => {toggleHamburger()}}>
                        X
                    </button>
                    <br /><br /><br /><br />
                    <NavLink activeClassName="nav-active" to={routes.HOME} onClick={() => {toggleHamburger()}}>HOME</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.INFO} onClick={() => {toggleHamburger()}}>ABOUT</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.WELL} onClick={() => {toggleHamburger()}}>WELLNESS</NavLink>
                </div>

            </div>
        )
    }
}