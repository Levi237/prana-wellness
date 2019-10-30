import React, { Component } from 'react';

import PackageDisplay       from '../corporate/PackageDisplay';
import ServiceDisplay       from '../services/ServiceDisplay';

import PurpleContent        from '../PurpleContent';
import '../PurpleContent';

export default class IndividualMain extends Component {
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
        image: "invigorating_yoga.png"
    },{
        smallText: "Reduce Stress + find",
        largeText: "Peace",
        image: "relaxing_meditation.png"
    },{
        smallText: "Increased Focus +",
        largeText: "Clarity",
        image: "mindful_breathing.png"
    }],
    individualPurpleContent: {
      header: "Want Prana in Your Workplace?",
      message: 
        "If you’d love to see a wellness program in your workplace, refer Prana Wellness to your company or HR manager and get a promo code to unlock premium content!"
      ,
      button: "refer to employer",
    }
  };
  render(){

    const { individualPurpleContent } = this.state;
    const { toggleReferralBtn } = this.props;
  
    return(<>


            <div className="wellness-main-container purple-content">

            <PurpleContent content={individualPurpleContent} toggle={toggleReferralBtn}/>

            </div>







            <br/><br/><br/>
          <ServiceDisplay services={this.state.services}/>
          <h1>subscribe to personal wellness</h1>
          <PackageDisplay pricePack={this.state.individualPlans}/>
    </>);
  };
};