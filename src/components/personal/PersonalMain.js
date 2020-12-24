import React, { Component } from 'react';
import styled from 'styled-components';

import PackageDisplay       from '../corporate/PackageDisplay';
import ServiceDisplay       from '../services/ServiceDisplay';

import PurpleContent        from '../PurpleContent';
import '../PurpleContent';

export default class PersonalMain extends Component {
  state = {
    individualPlans: [{ 
        title: "Asana",
        price: "$80/hour",
        duration: "Private Yoga Instruction",
        details: ["Learn foundational poses", "Deepen your practice", "Find balance"],
        image: "asana.png",
    },{
        title: "Satya",
        price: "$80/hour",
        duration: "Meditation & Breathwork ",
        details: ["Discover mental & physical benefits", "Practice focus & concentration", "Learn techniques to de-stress"],
        image: "satya.png",
    },{
        title: "Ahimsa",
        price: "$150/hour",
        duration: "Yoga Therapy",
        details: ["Rehab an injury", "Increase flexibility", "Relieve pain & mental stress"],
        image: "ahimsa.png",
    }],
    services: [{ 
        smallText: "Achieve Work-LIfe",
        largeText: "Balance",
        image: "balance.png"
    },{
        smallText: "Reduce Stress + find",
        largeText: "Peace",
        image: "peace.png"
    },{
        smallText: "Increased Focus +",
        largeText: "Clarity",
        image: "clarity.png"
    }],
    individualPurpleContent: {
      header: "the power of prana",
      message: 
      'Prana is Sanskrit for breath, considered as a life-giving force. Prana is seen as a universal energy, which flows in currents in and around the body.'
      ,
      button: "Schedule A Session",
    }
  };
  render(){

    const { individualPurpleContent } = this.state;
    const { toggleEmailSignup } = this.props;
  
    return(<>
      <Container className="wellness-main-container purple-content">
        <PurpleContent content={individualPurpleContent} value="contactRequest" toggleEmailSignup={toggleEmailSignup}/>
      </Container>
      <div>
      <ServiceDisplay services={this.state.services}/>
      </div>
      <br/>      <br/>      <br/>
      <h1>subscribe to personal wellness</h1>
      <PackageDisplay pricePack={this.state.individualPlans}/>
    </>);
  };
};
const Container = styled.div`

margin-bottom: 5vw;
margin-top: calc(25.86vw - 100vh + 196px);
position: relative;
z-index: 1;
padding-bottom: 8vw;
background: rgb(191, 158, 200);
button {
    margin-left: 2vw;
    margin-right: 2vw;
  }
  @media screen and (max-width: 945px) {
    margin-top: calc(32.3vw - 100vh + 58px);
    padding-top: 5vw;
  }
`;