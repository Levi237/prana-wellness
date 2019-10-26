import React from 'react';

 const HomeNav = ({ toggleHamburger }) => {

    return(<>
          <div className="home-logo">
            <div className="logo-box">
              <img src="../icon_white.png" alt="icon-white" />
            </div>
          </div>

          <div name="toggleHamburger" className="home-hamburger" onClick={(e) => toggleHamburger(e)}>
            <section></section><section></section><section></section>
          </div>
    </>);
};

export default HomeNav;