import React, { Component } from 'react';
import { Switch, Route }    from 'react-router-dom';
import styled               from 'styled-components';

import * as routes          from './constants/routes';
import Nav                  from './components/Nav';
import NavBar               from './components/NavBar';

import EmailSignup          from './components/contact/EmailSignup';
import ContactBox           from './components/contact/AnnouncementBanner'; 

import HomeHeader           from './components/home/HomeHeader';
import HeaderComponent      from './components/HeaderComponent';

import HeaderMessage from './components/header/HeaderMessage'

import HomeMain             from './components/home/HomeMain';
import AboutMain            from './components/about/AboutMain';
import CorporateMain        from './components/corporate/CorporateMain';
import PersonalMain         from './components/personal/PersonalMain';
import ServicesMain         from './components/services/ServicesMain';
import YogaTherapyMain      from './components/yogatherapy/YogaTherapyMain';
import PrenatalMain         from './components/prenatal/PrenatalMain';
// import CoachingMain         from './components/coaching/CoachingMain';
import Coaching from './components/coaching/Coaching';
import Speaking from './components/coaching/Speaking';

import RightFooter          from './components/footer/RightFooter';
import MidFooter            from './components/footer/MidFooter';
import LeftFooter           from './components/footer/LeftFooter';

import './App.css';

export default class App extends Component {
  state = {
    user: null,
    uid: null,
    emailContact: "",
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
    }],
    // CONTENT FOR PAGES
    aboutPage: {
      title: "THE TEAM BEHIND", 
      subtitle: "Prana Wellness",
      image: "about-header2.png",
      header: "the power of prana",
      message: 'Prana is Sanskrit for breath, considered as a life-giving force. Prana is seen as a universal energy, which flows in currents in and around the body.',
      value: "contactRequest",
      button: "Schedule A Session"
    },  
    wellnessServices: {
      title: "EXPLORE OUR WIDE-RANGING",
      subtitle: "Wellness Services",
      image: "service-header.png",
      header: "",
      message: "",
      value: "contactRequest",
      button: ""
    },
    personalWellness: {
      title: "REDISCOVER",
      subtitle: "Personal Wellness",
      image: "personal-header.jpg",
      header: "the power of prana",
      message: 'Prana is Sanskrit for breath, considered as a life-giving force. Prana is seen as a universal energy, which flows in currents in and around the body.',
      value: "contactRequest",
      button: "Schedule A Session",
    },  
    corporateWellness: {
      title: "CONSIDER",
      subtitle: "Corporate Wellness",
      image: "corporate-header2.png",
      header: "Want Prana in Your Workplace?",
      message: "If you’d love to see a wellness program in your workplace, refer Prana Wellness to your company or HR manager and get a promo code to unlock premium content!",
      value: "referralRequest",
      button: "Refer to Employer",
    },
    yogaTherapy: {
      title: "THE REASON FOR", 
      subtitle: "Yoga Therapy", 
      image: "yoga-header.jpg",
      header: "WHAT IS YOGA THERAPY?",
      message: "Yoga Therapy blends Eastern and Western medicine in a wholistic practice of healing the whole person. Yoga meets Integrative Medicine. Yoga Therapy is the adaptation of yoga practices for people with specific health challenges, chronic pain, anxiety, depression, and illness. Yoga Therapists are trained to work alongside medical doctors, chiropractors, physical therapists, and physiatrists.",
      value: "contactRequest",
      button: "BRING PRANA TO YOU"
    },
    maternalHealth: {
      title: "YOGA FOR",
      subtitle: "Maternal Health",
      image: "prenatal-header2.jpg",
      header: "Prenatal Yoga Experience",
      message: "You can expect to learn something new each time, as we explore the pregnant body's challenges and strengths. Leave class feeling encouraged and motivated. We really want clients to honor their bodies in this practice, and do what feels good. We are  motivated to do this work because there is major inequity in maternal health care. We want to close that gap.",
      value: "contactRequest",
      button: "BRING PRANA TO YOU"
    },
    coachingSpeaking: {
      title: "ENGAGE WITH",
      subtitle: "Speaking & Coaching",
      image: "coaching-header.jpg",
      header: "SPEAKING TO INSPIRE",
      message: "Book Stephanie, “Motivator in Chief,” to motivate, inspire, and provide valuable tools to educate your team at work, youth group, newbie entrepreneurs, or wellness providers.",
      value: "contactRequest",
      button: "BRING PRANA TO YOU"
    }
  };  

  toggleHamburger = () => {
    const hamburgerMenu = document.getElementById('menu');
    hamburgerMenu.classList.toggle('active');
    hamburgerMenu.classList.toggle('inactive');
  };
  toggleEmailSignup = (e) => {
    const emailForm = document.getElementById('email');
    emailForm.classList.toggle('active');
    emailForm.classList.toggle('inactive');
    this.setState({
      emailContact: e.currentTarget.value
    });
  };

  
  render(){
    const { user, emailContact, aboutPage, wellnessServices, personalWellness, corporateWellness, yogaTherapy, maternalHealth, coachingSpeaking } = this.state
    return(
      <GridContainer className="grid-container">

        <Nav toggleHamburger={this.toggleHamburger}/>
        <EmailSignup contactType={emailContact} toggleEmailSignup={this.toggleEmailSignup}/>
        
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
                    <HomeHeader toggleEmailSignup={this.toggleEmailSignup}/> }/>
            <Route path={routes.INFO} exact render={() => 
                    <HeaderComponent purpleBox={(false)} headerContent={aboutPage}/> }/>
            <Route path={routes.SERV} exact render={() => 
                    <HeaderComponent purpleBox={(true)} headerContent={wellnessServices}/> }/> 
            <Route path={routes.WELL} exact render={() => 
                    <HeaderComponent purpleBox={(true)} headerContent={personalWellness}/> }/>
            <Route path={routes.CORP} exact render={() => 
                    <HeaderComponent purpleBox={(false)} headerContent={corporateWellness}/> }/>   
            <Route path={routes.YOGA} exact render={() => 
                    <HeaderComponent purpleBox={(false)} headerContent={yogaTherapy}/> }/> 
            <Route path={routes.PREG} exact render={() => 
                    <HeaderComponent purpleBox={(false)} headerContent={maternalHealth}/> }/> 
            <Route path={routes.COAC} exact render={() => 
                    <HeaderComponent purpleBox={(false)} headerContent={coachingSpeaking}/> }/> 
            <Route path={routes.ROOT} render={() => 
                    <HomeHeader toggleEmailSignup={this.toggleEmailSignup}/> }/>                    
          </Switch>
        </GridHeader>

        <MainGrid className="grid-main">
          <Switch>
            <Route path={routes.HOME} exact render={() => 
                      <HomeMain /> }/>
            <Route path={routes.INFO} exact render={() => 
                      <HeaderMessage toggleEmailSignup={this.toggleEmailSignup} headerContent={aboutPage}>
                        <AboutMain /> 
                      </HeaderMessage> }/>      
            <Route path={routes.SERV} exact render={() => 
                      <ServicesMain toggleEmailSignup={this.toggleEmailSignup} headerContent={wellnessServices} /> }/>           
            <Route path={routes.WELL} exact render={() => 
                      <HeaderMessage toggleEmailSignup={this.toggleEmailSignup} headerContent={personalWellness}>
                        <PersonalMain/>
                      </HeaderMessage> }/>       
            <Route path={routes.CORP} exact render={() => 
                      <HeaderMessage toggleEmailSignup={this.toggleEmailSignup} headerContent={corporateWellness}>
                        <CorporateMain/>
                      </HeaderMessage> }/>  
            <Route path={routes.YOGA} exact render={() => 
                      <HeaderMessage toggleEmailSignup={this.toggleEmailSignup} headerContent={yogaTherapy}>
                        <YogaTherapyMain/>
                      </HeaderMessage>}/>
            <Route path={routes.PREG} exact render={() => 
                      <HeaderMessage toggleEmailSignup={this.toggleEmailSignup} headerContent={maternalHealth} >
                        <PrenatalMain/>
                      </HeaderMessage> }/>
            <Route path={routes.COAC} exact render={() => 
                      <HeaderMessage toggleEmailSignup={this.toggleEmailSignup} headerContent={coachingSpeaking}>
                        <Speaking/><Coaching/>
                      </HeaderMessage> }/>                      
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