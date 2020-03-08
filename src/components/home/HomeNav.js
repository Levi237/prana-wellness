import React from 'react';
import styled from 'styled-components';

const HomeNav = ({ toggleHamburger }) => {
  return(<>
    <HomeLogo className="home-logo">
      <LogoBox className="logo-box">
        <Logo src="../icon_white.png" alt="icon-white" />
      </LogoBox>
    </HomeLogo>

    <Hamburger name="toggleHamburger" className="home-hamburger" onClick={(e) => toggleHamburger(e)}>
      <section></section>
      <section></section>
      <section></section>
    </Hamburger>
  </>);
};

const HomeLogo = styled.div`
  float: left;
  margin-left: 10vw;
  margin-top: 30px;
  @media screen and (max-width: 945px) {
    margin-left: 0;
    margin-top: 12px;
  }
`;
const LogoBox = styled.div`
  width: 150px;
`;
const Logo = styled.img`
  margin-left: 5vw;
  margin: 0;
  width: 100%;
`;

const Hamburger = styled.div`
  float: right;
  margin: 90px 10vw 0 0;
  section { background-color: #FFF; }

  @media screen and (max-width: 945px) {

    margin: 25px 5vw 0 0;
  }
`;

export default HomeNav;