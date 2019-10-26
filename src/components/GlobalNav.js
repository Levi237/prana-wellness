import React from 'react';

 const GlobalNav = ({ toggleHamburger, logout, user }) => {

    return(<>
          <div className="header-logo">
            <div className="logo-box">
              <img src="../icon_fullcolor.png" alt="icon-fullcolor" />
            </div>
          </div>

          <div className="global-hamburger" onClick={() => toggleHamburger()}>
            <section></section><section></section><section></section>
          </div>
          {user && <button onClick={logout} style={{color:'green', float: 'right', margin: '20px'}}>LOGOUT</button>}
    </>);
};

export default GlobalNav;