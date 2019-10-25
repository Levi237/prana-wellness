import React, { Component } from 'react';
import { Switch, Route }    from 'react-router-dom';
// import * as admin from 'firebase-admin';
// import { Switch, Route, Redirect }  from 'react-router-dom';

import * as routes      from './constants/routes';
import Nav              from './components/Nav';
import Enter            from './components/Enter';
import AdminPortal      from './components/AdminPortal';

import GlobalNav        from './components/GlobalNav';
import EmailerRequest   from './components/EmailerRequest';
import ReferralRequest  from './components/ReferralRequest';
import ContactRequest   from './components/ContactRequest';

import HomeNav          from './components/home/HomeNav';
import HomeHeader       from './components/home/HomeHeader';
import HomeMain         from './components/home/HomeMain';
import AboutHeader      from './components/about/AboutHeader';
import AboutMain        from './components/about/AboutMain';
import CorporateHeader  from './components/corporate/CorporateHeader';
import CorporateMain    from './components/corporate/CorporateMain';
import IndividualHeader from './components/individual/IndividualHeader';
import IndividualMain   from './components/individual/IndividualMain';
import ServicesHeader   from './components/services/ServicesHeader';
import ServicesMain     from './components/services/ServicesMain';

import './App.css';


import firebase from 'firebase/app'

export default class App extends Component {
  state = {
    user: null,
    uid: null,
    otherServices: [{ 
      smallText: "Bootcamp",
      largeText: "Fitness",
      image: "shavasana.png",
      content: "Power hour of cardio, Plyometrics, HIIT, resistance bands, and body weight exercises. Modifications for all levels.",
    },{
      smallText: "Lunch +",
      largeText: "Learn",
      image: "meditation-icon.png",
      content: "Health, fitness, and mindfulness tools and tips for a balanced lifestyle and productive work experience.",
    },{
      smallText: "Corporate",
      largeText: "Massage",
      image: "breathing-icon.png",
      content: "Relaxing intuitive massage break from static postures.",
    },{
      smallText: "Work",
      largeText: "Play",
      image: "office-yoga.png",
      content: "Take time to play at work! Fun games that focus on leadership and team building.",
    },{
      smallText: "Wellness",
      largeText: "Retreats",
      image: "retreat-other-services.png",
      content: "Curated and customizable off-site wellness retreats for team building and training, with a fitness and wellness focus.",
    },{
      smallText: "Health",
      largeText: "Fairs",
      image: "breathing-icon.png",
      content: "Create a wellness fair for your office or add us on to your existing fair for various wellness sessions.",
    }]
  };  
  
  componentDidMount = () => {
    this.authListener();
    // this.loadForm();
    // this.loadRecipes();
  };


//If target matches then:
  authListener(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({
          user: user.providerData[0],
          uid: firebase.auth().currentUser.uid
        });
      }else{
        this.setState({user: null, uid: null});
      }
    });
  };
  logout = () => {
    firebase.auth().signOut();
  }
  // onClose = (e) => {
  //   this.props.onClose && this.props.onClose(e);
  // };
  toggleHamburger = () => {
    const hamburgerMenu = document.getElementById('menu');
    hamburgerMenu.classList.toggle('active');
    hamburgerMenu.classList.toggle('inactive');
  };
  toggleReferralBtn = (e) => {
    const referralForm = document.getElementById('referral');
    referralForm.classList.toggle('active');
    referralForm.classList.toggle('inactive');
  };
  toggleContactBtn = (e) => {
    const referralForm = document.getElementById('contact');
    referralForm.classList.toggle('active');
    referralForm.classList.toggle('inactive');
  };
  render(){
    return(
      <div className="grid-container">
      <Nav toggleHamburger={this.toggleHamburger}/>
      <ReferralRequest toggleReferralBtn={this.toggleReferralBtn}/>
      <ContactRequest toggleContactBtn={this.toggleContactBtn} services={this.state.otherServices} />
        <div className="grid-nav">
          <Switch>
            <Route path={routes.HOME} exact render={() => 
                      <HomeNav toggleHamburger={this.toggleHamburger}/> }/>           
            <Route path={routes.ROOT} render={() => 
                      <GlobalNav logout={this.logout} toggleHamburger={this.toggleHamburger}/> }/>    
          </Switch>
        </div>

        <div className="grid-header">
          <Switch>         
            <Route path={routes.HOME} exact render={() => 
                    <HomeHeader toggleContactBtn={this.toggleContactBtn}/> }/>
            <Route path={routes.ADMN} exact render={() => 
                    !this.state.user ? <Enter /> : <AdminPortal /> }/>       
            <Route path={routes.INFO} exact render={() => 
                    <AboutHeader /> }/>
            <Route path={routes.WELL} exact render={() => 
                    <IndividualHeader /> }/>
            <Route path={routes.CORP} exact render={() => 
                    <CorporateHeader /> }/>   
            <Route path={routes.SERV} exact render={() => 
                      <ServicesHeader /> }/>   
            <Route path={routes.ROOT} render={() => 
                    <HomeHeader toggleContactBtn={this.toggleContactBtn}/> }/>                    
          </Switch>
        </div>

        <div className="grid-main">
          <Switch>
            <Route path={routes.HOME} exact render={() => 
                      <HomeMain /> }/>
            {/* <Route path={routes.ADMN} exact render={() => 
                    this.state.user &&  }/>   */}
            <Route path={routes.INFO} exact render={() => 
                      <AboutMain /> }/>
            <Route path={routes.WELL} exact render={() => 
                      <IndividualMain toggleReferralBtn={this.toggleReferralBtn} toggleContactBtn={this.toggleContactBtn}/> }/>       
            <Route path={routes.CORP} exact render={() => 
                      <CorporateMain toggleContactBtn={this.toggleContactBtn}/> }/>  
            <Route path={routes.SERV} exact render={() => 
                      <ServicesMain toggleReferralBtn={this.toggleReferralBtn} toggleContactBtn={this.toggleContactBtn}/> }/>           
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
        <EmailerRequest />
        </div>

        <div className="grid-footer-right">
          <div className="travel-slay-logo">
            <img src="travel_slay_white.png" alt="Travel Slay" />
            <section>explore fitness + training</section>
            <section>with Stephanie erazo</section>
          </div>
        </div>
        
      </div>
    );
  };
};