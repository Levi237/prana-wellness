import React, { Component } from 'react';
import { Switch, Route }    from 'react-router-dom';
import styled               from 'styled-components';

import * as routes          from './constants/routes';
import Nav                  from './components/Nav';
import NavBar               from './components/NavBar';

import Enter                from './components/admin/Enter';
import AdminPortal          from './components/admin/AdminPortal';
import ReferralRequest      from './components/admin/ReferralRequest';
import ContactRequest       from './components/admin/ContactRequest';

import EmailSignup          from './components/data/EmailSignup';
import ContactBox           from './components/contact/ContactBox'; 

import HomeHeader           from './components/home/HomeHeader';
import HeaderComponent      from './components/HeaderComponent';

import HomeMain             from './components/home/HomeMain';
import AboutMain            from './components/about/AboutMain';
import CorporateMain        from './components/corporate/CorporateMain';
import IndividualMain       from './components/individual/IndividualMain';
import ServicesMain         from './components/services/ServicesMain';
import YogaTherapyMain      from './components/yogatherapy/YogaTherapyMain';
import PrenatalMain         from './components/prenatal/PrenatalMain';
import CoachingMain         from './components/coaching/CoachingMain';

import RightFooter          from './components/footer/RightFooter';
import MidFooter            from './components/footer/MidFooter';
import LeftFooter           from './components/footer/LeftFooter';

import './App.css';

import firebase from 'firebase/app'

export default class App extends Component {
  state = {
    user: null,
    uid: null,
    otherServices: [{ 
      smallText: "Bootcamp",
      largeText: "Fitness",
      image: "bootcamp_fitness.png",
      content: "Power hour of cardio, Plyometrics, HIIT, resistance bands, and body weight exercises. Modifications for all levels.",
    },{
      smallText: "Lunch +",
      largeText: "Learn",
      image: "lunch_and_learn.png",
      content: "Health, fitness, and mindfulness tools and tips for a balanced lifestyle and productive work experience.",
    },{
      smallText: "Corporate",
      largeText: "Massage",
      image: "corporate_massage.png",
      content: "Relaxing intuitive massage break from static postures.",
    },{
      smallText: "Work",
      largeText: "Play",
      image: "office-yoga.png",
      content: "Take time to play at work! Fun games that focus on leadership and team building.",
    },{
      smallText: "Wellness",
      largeText: "Retreats",
      image: "wellness_retreats.png",
      content: "Curated and customizable off-site wellness retreats for team building and training, with a fitness and wellness focus.",
    },{
      smallText: "Health",
      largeText: "Fairs",
      image: "health_fairs.png",
      content: "Create a wellness fair for your office or add us on to your existing fair for various wellness sessions.",
    }]
  };  
  
  componentDidMount = () => {
    this.authListener();
  };

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
    const contactBtn = document.getElementById('contact');
    contactBtn.classList.toggle('active');
    contactBtn.classList.toggle('inactive');
  };
  toggleEmailSignup = (e) => {
    const emailForm = document.getElementById('email');
    emailForm.classList.toggle('active');
    emailForm.classList.toggle('inactive');
  };
  
  render(){
    const { user } = this.state
    return(
      <GridContainer className="grid-container">

        <Nav toggleHamburger={this.toggleHamburger}/>
        <ReferralRequest toggleReferralBtn={this.toggleReferralBtn}/>
        <EmailSignup toggleEmailSignup={this.toggleEmailSignup}/>

        <ContactRequest 
          toggleContactBtn={this.toggleContactBtn} 
          services={this.state.otherServices} 
        />
        
        <NavGrid className="grid-nav">
          <Switch>
            <Route path={routes.HOME} exact render={() => 
                      <NavBar 
                        page={"home"} 
                        toggleHamburger={this.toggleHamburger}
                        toggleEmailSignup={this.toggleEmailSignup}
                        /> 
            }/>          
            <Route path={routes.ROOT} exact render={() => 
                      <NavBar 
                        page={"home"} 
                        toggleHamburger={this.toggleHamburger}
                        toggleEmailSignup={this.toggleEmailSignup}
                        /> 
            }/>    
            <Route path={routes.ROOT} render={() => 
                      <NavBar 
                        page={"global"} 
                        user={user} 
                        logout={this.logout} 
                        toggleHamburger={this.toggleHamburger}
                        toggleEmailSignup={this.toggleEmailSignup}
                      /> 
            }/>    
          </Switch>
        </NavGrid>

        <GridHeader className="grid-header">
          <Switch>         
            <Route path={routes.HOME} exact render={() => 
                    <HomeHeader toggleContactBtn={this.toggleContactBtn}/> }/>
            <Route path={routes.ADMN} exact render={() => 
                    !this.state.user ? <Enter /> : <AdminPortal /> }/>       
            <Route path={routes.INFO} exact render={() => 
                    <HeaderComponent purpleBox={(false)} title="THE TEAM BEHIND" subtitle="Prana Wellness" image="about-header2.png"/> }/>
            <Route path={routes.WELL} exact render={() => 
                    <HeaderComponent purpleBox={(true)} title="REDISCOVER" subtitle="Personal Wellness" image="wellness-header.png"/> }/>
            <Route path={routes.CORP} exact render={() => 
                    <HeaderComponent purpleBox={(false)} title="CONSIDER" subtitle="Corporate Wellness" image="corporate-header2.png"/> }/>   
            <Route path={routes.SERV} exact render={() => 
                    <HeaderComponent purpleBox={(true)} title="EXPLORE OUR WIDE-RANGING" subtitle="Wellness Services" image="service-header.png"/> }/> 
            <Route path={routes.YOGA} exact render={() => 
                    <HeaderComponent purpleBox={(false)} title="THE REASON FOR" subtitle="Yoga Therapy" image="yoga-therapy-header.jpg"/> }/> 
            <Route path={routes.PREG} exact render={() => 
                    <HeaderComponent purpleBox={(false)} title="YOGA FOR" subtitle="Maternal Health" image="prenatal-header2.jpg"/> }/> 
            <Route path={routes.COAC} exact render={() => 
                    <HeaderComponent purpleBox={(false)} title="ENGAGE WITH" subtitle="Speaking &amp; Coacthing" image="coaching-header.jpg"/> }/> 
            <Route path={routes.ROOT} render={() => 
                    <HomeHeader toggleContactBtn={this.toggleContactBtn}/> }/>                    
          </Switch>
        </GridHeader>

        <MainGrid className="grid-main">
          <Switch>
            <Route path={routes.HOME} exact render={() => 
                      <HomeMain /> }/>
            <Route path={routes.ADMN} exact render={() => 
                    this.state.user && <></>  }/>  
            <Route path={routes.INFO} exact render={() => 
                      <AboutMain /> }/>
            <Route path={routes.YOGA} exact render={() => 
                      <YogaTherapyMain /> }/>
            <Route path={routes.PREG} exact render={() => 
                      <PrenatalMain /> }/>
            <Route path={routes.COAC} exact render={() => 
                      <CoachingMain /> }/>                      
            <Route path={routes.WELL} exact render={() => 
                      <IndividualMain 
                        toggleReferralBtn={this.toggleReferralBtn} 
                        toggleContactBtn={this.toggleContactBtn}
                      /> 
            }/>       
            <Route path={routes.CORP} exact render={() => 
                      <CorporateMain toggleContactBtn={this.toggleContactBtn}/> }/>  
            <Route path={routes.SERV} exact render={() => 
                      <ServicesMain 
                        toggleReferralBtn={this.toggleReferralBtn} 
                        toggleContactBtn={this.toggleContactBtn}
                      /> 
            }/>           
            <Route path={routes.ROOT} render={() => 
                      <HomeMain /> }/>
          </Switch>          
        </MainGrid>

        <ContactGrid className="grid-contact">
          <ContactBox 
            toggleEmailSignup={this.toggleEmailSignup}/>
        </ContactGrid>

        <LeftFooterGrid className="grid-footer-left">
          <LeftFooter/>
        </LeftFooterGrid>
        <MidFooterGrid className="grid-footer-mid">
          <MidFooter/>
        </MidFooterGrid>
        <RightFooterGrid className="grid-footer-right">
            <RightFooter/>
        </RightFooterGrid>
        
      </GridContainer>
    );
  };
};

const GridContainer = styled.div`
  display: grid;
  width: 100vw;
  min-height: 100%;
  grid-template-rows: 46px 150px calc(100vh - 196px) auto 220px;
  grid-template-columns: 200px calc(100vw - 400px) 200px;
  background-color: #fff;
  grid-gap: 0;
  margin: 0;
grid-template-areas:
  ' contact contact contact '
  ' nav nav nav '
  ' header header header '
  ' main main main '
  ' footer-left footer-mid footer-right ';
  grid-gap: 0;

@media screen and (max-width: 945px) {
    grid-template-rows: 40px 18vw 90vh auto 40vw 100px 120px;
    grid-template-columns: 100vw;
  grid-template-areas:
    ' contact '
    ' nav '
    ' header '
    ' main '
    ' footer-left '
    ' footer-mid '
    ' footer-right ';
  }
`;

const GridHeader = styled.div`
  grid-area: header;
  text-align: center;

  @media screen and (max-width: 945px) {
      margin-bottom: 0;
      margin-top: 0;
      text-align: center;
      height: 44vw;
      overflow: hidden;
    }
`;

const NavGrid = styled.div`
  grid-area: nav;
  background-color: transparent;
  position: absolute;
  z-index: 10;
  color: #FFF;
  width: 100vw;
  margin-top: 20px;
    @media screen and (max-width: 945px) {
      margin-left: 5vw;
      width: 90vw;

      margin-top: 40px;
    }
`;
const MainGrid = styled.div`
  grid-area: main;
  background-color: #FFF;
  padding-bottom: 60px;
  text-align: center;
`;

const ContactGrid = styled.div`
  grid-area: contact;
  background-color: #965BA5;
  position: relative;
`;

const FooterGrid = styled.div`
  background-color: #965BA5;
  padding-top: 2vw;
`;

const LeftFooterGrid = styled(FooterGrid)`
  grid-area: footer-left;

  @media screen and (max-width: 945px) {

      text-align: center;
  div {
      margin-left: auto;
      margin-right: auto;
    }
`;

const MidFooterGrid = styled(FooterGrid)`
  grid-area: footer-mid;
  text-align: center;
  section {
    margin: 3vw auto 1vw auto;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2vw;
    letter-spacing: .3vw;
    text-transform: uppercase;
    color: #A0CD4D;
    text-align: center;
  }
  @media screen and (max-width: 945px) {
    section {
      margin: 3vw auto 1vw auto;
      font-weight: bold;
      font-size: 2.8vw;
      letter-spacing: 3px;

    }
    input {
      width: 90vw;
      height: 10vw;
      font-size: 5vw;
    }
  }
`;

const RightFooterGrid = styled(FooterGrid)`
  grid-area: footer-right;
  @media screen and (max-width: 945px) {
  }
`;