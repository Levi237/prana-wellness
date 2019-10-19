import React, { Component } from 'react';
import { Switch, Route }    from 'react-router-dom';
import * as admin from 'firebase-admin';
// import { Switch, Route, Redirect }  from 'react-router-dom';

import * as routes      from './constants/routes';
import Nav              from './components/Nav';

import GlobalNav        from './components/GlobalNav';
import HomeNav          from './components/home/HomeNav';
import HomeHeader       from './components/home/HomeHeader';
import HomeMain         from './components/home/HomeMain';
import AboutHeader      from './components/about/AboutHeader';
import AboutMain        from './components/about/AboutMain';
import CorporateHeader  from './components/corporate/CorporateHeader';
import CorporateMain    from './components/corporate/CorporateMain';
import WellnessHeader   from './components/wellness/WellnessHeader';
import WellnessMain     from './components/wellness/WellnessMain';

import './App.css';

// import firebase from 'firebase/app'

export default class App extends Component {

  toggleHamburger = () => {
    const hamburgerMenu = document.getElementById('menu');
    hamburgerMenu.classList.toggle('active');
    hamburgerMenu.classList.toggle('inactive');
  };
  render(){
    return(
      <div className="grid-container">
      <Nav toggleHamburger={this.toggleHamburger}/>

        <div className="grid-nav">
          <Switch>
            <Route path={routes.HOME} exact render={() => 
                      <HomeNav toggleHamburger={this.toggleHamburger}/> }/>
            <Route path={routes.INFO} exact render={() => 
                      <GlobalNav toggleHamburger={this.toggleHamburger}/> }/>
            <Route path={routes.WELL} exact render={() => 
                      <GlobalNav toggleHamburger={this.toggleHamburger}/> }/>    
            <Route path={routes.CORP} exact render={() => 
                      <GlobalNav toggleHamburger={this.toggleHamburger}/> }/>    
            <Route path={routes.ROOT} render={() => 
                      <HomeNav toggleHamburger={this.toggleHamburger}/> }/>                   
          </Switch>
        </div>

        <div className="grid-header">
          <Switch>         
            <Route path={routes.HOME} exact render={() => 
                    <HomeHeader /> }/>
            <Route path={routes.INFO} exact render={() => 
                    <AboutHeader /> }/>
            <Route path={routes.WELL} exact render={() => 
                    <WellnessHeader /> }/>
            <Route path={routes.CORP} exact render={() => 
                    <CorporateHeader /> }/>    
            <Route path={routes.ROOT} render={() => 
                    <HomeHeader /> }/>                    
          </Switch>
        </div>

        <div className="grid-main">
          <Switch>
            <Route path={routes.HOME} exact render={() => 
                      <HomeMain /> }/>
            <Route path={routes.INFO} exact render={() => 
                      <AboutMain /> }/>
            <Route path={routes.WELL} exact render={() => 
                      <WellnessMain /> }/>       
            <Route path={routes.CORP} exact render={() => 
                      <CorporateMain /> }/>        
            <Route path={routes.ROOT} render={() => 
                      <HomeMain /> }/>
          </Switch>
        </div>

        <div className="grid-contact">
          <div>
            <img src="instagram-icon.png" alt="IG"/><section>info@pranawellness.life</section>
          </div>
        </div>

        <div className="grid-footer-left">
          <div className="logo-box">
            <img src="icon_white.png" alt="icon-white" />
            <section className="pranaText" >PRANA</section>
            <section className="wellnessText">wellness</section>
          </div>
        </div>

        <div className="grid-footer-mid">
        <section>sign up for our WELLNESS NEWSLETTER </section>
            <input placeholder="Email Here"/>
        </div>

        <div className="grid-footer-right">
          <div className="travel-slay-logo">
            <img src="travel_slay_white.png" alt="Travel Slay" />
            <section>explore fitness + training</section>
            <section>with Stephanie erazo</section>
          </div>
        </div>
        
      </div>
    )
  }
}