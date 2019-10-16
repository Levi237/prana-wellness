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
                    <NavLink activeClassName="nav-active" to={routes.HOME}>HOME</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.INFO}>ABOUT</NavLink>
                </div>

            </div>
        )
    }
}