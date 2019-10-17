import React from 'react';

 const HomeNav = ({ toggleHamburger }) => {

    return(<>
          <div className="home-logo">
            <div className="logo-box">
              <img src="icon_white.png" alt="icon-white" />
            </div>
          </div>

          <div className="home-hamburger" onClick={() => toggleHamburger()}>
            <section></section><section></section><section></section>
          </div>
    </>)
}

export default HomeNav