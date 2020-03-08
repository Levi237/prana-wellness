import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as routes from '../constants/routes'

 const GlobalNav = ({ toggleHamburger, logout, user }) => {

    return(<>
          <HeaderLogo className="header-logo">
            <Link to={routes.HOME}>
              <div className="logo-box">
                <img src="../icon_fullcolor.png" alt="icon-fullcolor" />
              </div>
            </Link>
          </HeaderLogo>

          <div className="global-hamburger" onClick={() => toggleHamburger()}>
            <section></section>
            <section></section>
            <section></section>
          </div>
          {user && <button onClick={logout} style={{color:'green', float: 'right', margin: '20px'}}>LOGOUT</button>}
    </>);
};

const HeaderLogo = styled.div`

`;

export default GlobalNav;