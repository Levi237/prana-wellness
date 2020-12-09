import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import * as routes from '../constants/routes';

export default class Nav extends Component {


    render(){
        const { toggleHamburger } = this.props;
        
        return(
            <NavContainer id="menu" className="inactive">
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
                    <NavLink activeClassName="nav-active" to={routes.YOGA} onClick={() => {toggleHamburger()}}>YOGA THERAPY</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.PREG} onClick={() => {toggleHamburger()}}>PRE/POST NATAL</NavLink>
                </div>

            </NavContainer>
        );
    };
};

const NavContainer = styled.div`
    text-align: center;
    font-size: 20px;
    right: 0;
    z-index: 111;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #744A9E;
    color: #FFF;

    position: fixed;

    a {
        text-decoration: none;
        display: block;
        height: 44px;
        padding-top: 20px;
        color: #FFF;
    }
    a:hover {
        color: #A0CD4D;
    }
    
    button {
        position: absolute;
        top: 5px;
        right: 5px;
        padding: 5px;
        color: #FFF;
        border: none;
        font-size: 14px;
    }
`;