import React from 'react';

 const GlobalNav = ({ toggleHamburger }) => {

    return(<>
          <div className="header-logo">
            <div className="logo-box">
              <img src="icon_fullcolor.png" alt="icon-fullcolor" />
            </div>
            <div>
                <section className="pranaText">PRANA</section>
                <section className="wellnessText">wellness</section>
            </div>
          </div>

          <div className="global-hamburger" onClick={() => toggleHamburger()}>
            <section></section><section></section><section></section>
          </div>
    </>)
}

export default GlobalNav