import React, { Component } from 'react';
import styled from 'styled-components';

import BenefitsDisplay      from './BenefitsDisplay';
import PackageDisplay       from './PackageDisplay';
import PranaDifference      from './PranaDifference';

import PurpleContent        from '../PurpleContent';
import '../PurpleContent.css';


export default class CorporateMain extends Component {
  state = {
      corporatePlans: [{ 
        title: "Namaste",
        price: "$300/session",
        duration: "1x per month",
        details: ["Yoga", 
          "Meditation", 
          "Breathwork", 
          "Online Resources"
        ],
        star: "*6 month commitment",
        image: "namaste.png",
    },{
        title: "Karma",
        price: "$200/session",
        duration: "1 x per week",
        secondTitle: "Namaste +",
        details: [
          "1 Lunch & Learn", 
          "Access to special events"
        ],
        star:  "*3 month commitment",
        image: "karma.png",
    },{
        title: "Guru",
        price: "$4500",
        duration: "12 week intensive",
        secondTitle: "Karma + Namaste",
        details: [
          "Structured program for workplace refresh", 
          "Team Building",
          "Wellness Coaching",
        ],
        star: "*Customizable, pricing may vary*",
        image: "guru.png",
    }],
    CorporatePurpleContent: {
      header: "DON'T SEE A PACKAGE THAT'S RIGHT?",
      message: "Whether you want one activity or all of them, we can help you find a program that works best for your company. Mix and match services, define your timeline, and help us understand your unique needs for wellness in the workplace.",
      button: "Bring Prana to Your Workplace",
    }
  };

  render(){
    const { corporatePlans, CorporatePurpleContent } = this.state;
    const { toggleContactBtn } = this.props;

    return(<>
      <Container className="about-main-container">
        <div className="main-title">

        <h1>the power of prana</h1>
            <section className="main-cta">
              <i>
                “Prana is Sanskrit for breath, considered as a life-giving force. Prana is seen as a universal energy, which flows in currents in and around the body.”
              </i>            
            </section>

          <PranaDifference />
          <BenefitsDisplay />
        </div>
        <h1>Corporate Wellness Solutions</h1>
        <PackageDisplay pricePack={corporatePlans}/>

        <div className="custom-quote purple-content">
          <PurpleContent content={CorporatePurpleContent} toggle={toggleContactBtn}/>
        </div>
        
      </Container>
      
    </>);
  };
};

const Container = styled.div`

margin-bottom: 5vw;
margin-top: calc(25.86vw - 100vh + 196px);
position: relative;
z-index: 1;
padding-bottom: 8vw;

button {
    margin-left: 2vw;
    margin-right: 2vw;
  }
  @media screen and (max-width: 945px) {
    margin-top: calc(32.3vw - 100vh + 58px);
    padding-top: 5vw;
  }
`;