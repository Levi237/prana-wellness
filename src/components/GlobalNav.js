import React from 'react';

 const GlobalNav = ({ toggleHamburger, logout, user }) => {

    return(<>
          <div className="header-logo">
            <div className="logo-box">
              <img src="icon_fullcolor.png" alt="icon-fullcolor" />
            </div>
          </div>

          {user && <button onClick={logout} style={{color:'green'}}>LOGOUT</button>}
          <div className="global-hamburger" onClick={() => toggleHamburger()}>
            <section></section><section></section><section></section>
          </div>
    </>);
};

export default GlobalNav;