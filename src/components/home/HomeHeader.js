import React from 'react';

 const HomeHeader = ({toggleContactBtn}) => {
    return(<>
          <div className="home-header">
            <section className="welcomeText">WELCOME TO</section>
            <section className="pranaText">PRANA</section>
            <section className="wellnessText">wellness</section>
            <section className="statementText">Wellness designed to work for you.</section>
            <br/><br/>
            <button name="contactForm" className="ctaBtn mobile-fill" onClick={(e) => {toggleContactBtn(e)}}>Bring Wellness to Your Workplace</button>
          </div>
    </>);
};

export default HomeHeader;