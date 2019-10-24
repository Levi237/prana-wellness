import React from 'react';

 const HomeNav = ({ toggleReferralBtn }) => {

    return(<>
          <div className="home-logo">
            <div className="logo-box">
              <img src="icon_white.png" alt="icon-white" />
            </div>
          </div>

          <div name="hamburgerMenu" className="home-hamburger" onClick={(e) => toggleReferralBtn(e)}>
            <section></section><section></section><section></section>
          </div>
    </>)
}

export default HomeNav