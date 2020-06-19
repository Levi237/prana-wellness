import React, { Component } from 'react';
import styled from 'styled-components';

import BenefitsDisplay      from './BenefitsDisplay';
// import PackageDisplay       from './PackageDisplay';
import NewPackageDisplay   from './NewPackageDisplay';
import PranaDifference      from './PranaDifference';

import PurpleContent        from '../PurpleContent';
import '../PurpleContent.css';


export default class CorporateMain extends Component {
  state = {
    corporateChart: [{
      title: [
        "Namaste",
        "Karma",
        "Guru",
        "Samadhi"
      ],
      price: [
        "300",
        "250",
        "200",
        "100"
      ],
      duration: [
        "1",
        "4",
        "8",
        "20"
      ],
      details: [
        {
          product: "Mix and match classes",
          included: ["x","x","x","x"],
        },{
          product: "New, hands-on guided class each session",
          included: ["x","x","x","x"],
        },{
          product: "Monthly online freebie", 
          included: ["x","x","x","x"],
        },{
          product: "Free access to popup wellness events", 
          included: ["x","x","x","x"],
        },{
          product: "20% off Online Wellness Courses",
          included: ["x","x","x","x"],
        },{
          product: "Monthly Lunch and Learn",
          included: ["x","x","x","x"],
        },{
          product: "IN-OFFICE WELLNESS COACH 5 DAYS PER WEEK!",
          included: ["x","x","x","x"],
        },{
          product: "Monthly Team building wellness day",
          included: ["x","x","x","x"],
        } 
      ]
    }],
    CorporatePurpleContent: {
      header: "DON'T SEE A PACKAGE THAT'S RIGHT?",
      message: "Whether you want one activity or all of them, we can help you find a program that works best for your company. Mix and match services, define your timeline, and help us understand your unique needs for wellness in the workplace.",
      button: "Bring Prana to Your Workplace",
    }
  };

  render(){
    const { corporateChart, CorporatePurpleContent } = this.state;
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
        {/* <PackageDisplay pricePack={corporatePlans}/> */}
        <NewPackageDisplay pricePack={corporateChart}/>
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