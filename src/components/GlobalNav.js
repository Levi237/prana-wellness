import React from 'react';

 const GlobalNav = ({ toggleHamburger, logout }) => {

    return(<>
          <div className="header-logo">
            <div className="logo-box">
              <img src="icon_fullcolor.png" alt="icon-fullcolor" />
            </div>
            {/* <div>
                <section className="pranaText">PRANA</section>
                <section className="wellnessText">wellness</section>
            </div> */}
          </div>

          <button onClick={logout} style={{color:'green'}}>LOGOUT</button>
          <div className="global-hamburger" onClick={() => toggleHamburger()}>
            <section></section><section></section><section></section>
          </div>
    </>);
};

export default GlobalNav;