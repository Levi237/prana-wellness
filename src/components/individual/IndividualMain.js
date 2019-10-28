import React, { Component } from 'react';

import PackageDisplay from '../corporate/PackageDisplay';
import ServiceDisplay from '../services/ServiceDisplay';

import './ReferralQuote.css';


export default class IndividualMain extends Component {
  state = {
    individualPlans: [{ 
        title: "Asana",
        price: "$80/hour",
        duration: "Private Yoga Instruction",
        details: ["Learn foundational poses", "Deepen your practice", "Find balance", ""],
        image: "namaste.png",
    },{
        title: "Satya",
        price: "$80/hour",
        duration: "Meditation and Breathwork ",
        details: ["Discover mental and physical benefits", "Practice focus and concentration", "Learn techniques to de-stress", ""],
        image: "karma.png",
    },{
        title: "Ahimsa",
        price: "$150/hour",
        duration: "Yoga Therapy",
        secondTitle:'“Wellness for the Working Mind”',
        details: ["Rehab an injury", "Increase flexibility", "Relieve pain and mental stress", ""],
        image: "guru.png",
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
    }]
  };
  render(){


    const { toggleReferralBtn } = this.props;
  
    return(<>
          <div className="wellness-main-container">
            <section className="main-title white">Want Prana in Your Workplace?</section>
            <section className="main-content-box">
            <div>If you’d love to see a wellness program in your workplace, refer Prana Wellness to your company or HR manager and get a promo code to unlock premium content! </div>

              <div><button className="purple" name="referralForm" onClick={(e) => {toggleReferralBtn(e)}}>refer to employer</button></div>
            </section>
            </div>
            <br/><br/><br/>
          <ServiceDisplay services={this.state.services}/>
          <section className="header-two">subscribe to personal wellness</section>
          <PackageDisplay pricePack={this.state.individualPlans}/>
    </>);
  };
};