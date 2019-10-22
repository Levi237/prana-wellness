import React from 'react';

 const HomeHeader = () => {
    return(<>
          <div className="home-header">
            <section className="welcomeText">WELCOME TO</section>
            <section className="pranaText">PRANA</section>
            <section className="wellnessText">wellness</section>
            <section className="statementText">Wellness designed to work for you.</section>
            <br/><br/>
            <button className="ctaBtn">explore wellness options</button>
          </div>
    </>)
}

export default HomeHeader