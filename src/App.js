import React, { Component } from 'react';

import './App.css';

// import firebase from 'firebase/app'

export default class App extends Component {
  render(){
    return(
      <div className="grid-container">
        <div className="grid-contact">

          <img src="instagram-icon.png" alt="IG"/><section>info@pranawellness.life</section>
        </div>
        <div className="grid-nav">TEST</div>
        <div className="grid-header">
          <div className="home-header">
            <section className="welcomeText">WELCOME TO</section>
            <section className="pranaText">PRANA</section>
            <section className="wellnessText">wellness</section>
            <section className="statementText">Focused on helping companies + individuals lead happier, healthier lives.</section>
          </div>
        </div>

        <div className="grid-main">
          <div className="home-main-top"><br />
            "Prana" is Sanskrit for breath, considered as a life-giving force.<br />
            Prana is seen as a universal energy which flows in currents in and around the body.
          </div>
          <section className="home-main-header">WELLNESS SERVICES</section>
          <button>browse services</button>
        </div>
        <div className="grid-contact">

          <img src="instagram-icon.png" alt="IG"/><section>info@pranawellness.life</section>
        </div>
        <div className="grid-footer">
        
        </div>
        
      </div>
    )
  }
}
