import React, { Component }         from 'react';
import { Switch, Route, Redirect }  from 'react-router-dom';

import * as routes    from './constants/routes';
import Nav            from './components/Nav'

import PointDisplay   from './components/PointDisplay';
import PackageDisplay from './components/PackageDisplay';
import MeetStephanie  from './components/MeetStephanie';

import './App.css';



// import firebase from 'firebase/app'

export default class App extends Component {
  render(){
    return(
      <div className="grid-container">
      <Nav />
        <div className="grid-contact">
          <img src="instagram-icon.png" alt="IG"/>
          <section>info@pranawellness.life</section>
        </div>
        <div className="grid-nav">
          <div className="home-logo">
            <div className="logo-box">
              <img src="icon_white.png" alt="icon-white" />
            </div>
          </div>
          <div className="home-hamburger">
            <section></section><section></section><section></section>
          </div>
        </div>
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
          <PointDisplay />
          <br /><br /><br/>
          <button>browse services</button>
          <br /><br /><br/>

          <PackageDisplay />
          <MeetStephanie />
        </div>
        <div className="grid-contact">

          <img src="instagram-icon.png" alt="IG"/><section>info@pranawellness.life</section>
        </div>
        <div className="grid-footer">
          <div className="logo-box">
            <img src="icon_white.png" alt="icon-white" />
            <section className="pranaText" >PRANA</section>
            <section className="wellnessText">wellness</section>
          </div>
        </div>
        
      </div>
    )
  }
}
