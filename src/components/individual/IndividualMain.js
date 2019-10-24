import React, { Component } from 'react';

import PackageDisplay from '../corporate/PackageDisplay';
import ServiceDisplay from '../services/ServiceDisplay';

import './ReferralQuote.css'

class IndividualMain extends Component {
  state = {
    individualPlans: [{ 
        title: "Asana",
        price: "$10/month",
        duration: ["1 x per month", "(6 month commitment)"],
        details: ["Can be a mix of yoga, meditation, and/or breath work", "*See add ons for additional services"],
        image: "namaste.png",
    },{
        title: "Satiya",
        price: "$20/month",
        duration: ["1 x per week", "(3 month commitment)"],
        details: ["Access to online meditations", "1 lunch and learn ", "*See add ons for additional services"],
        image: "karma.png",
    },{
        title: "Ahimsa",
        price: "$50/month",
        duration: ["12 week", "intensive program"],
        secondTitle:'“Wellness for the Working Mind”',
        details: ["Combination of lunch and learns, speakers, wellness classes, and team building exercises Access to various online wellness resources- yoga, stretching, breath work, meditation", "*Customizable, pricing may vary*"],
        image: "guru.png",
    }],
    services: [{ 
        smallText: "Achieve Work-LIfe",
        largeText: "Balance",
        image: "yoga-icon.png"
    },{
        smallText: "Reduce Stress + find",
        largeText: "Peace",
        image: "meditation-icon.png"
    },{
        smallText: "Increased Focus +",
        largeText: "Clarity",
        image: "breathing-icon.png"
    }]
  }
  render(){


    const { toggleReferralBtn } = this.props;
  
    return(<>
          <div className="wellness-main-container">
          {/* <div className=""> */}
            <section className="main-title white">Want Prana in Your Workplace?</section>
            <section className="main-content-box">
            <div>If you’d love to see a wellness program in your workplace, refer Prana Wellness to your company or HR manager and get a promo code to unlock premium content! </div>

              <div><button onClick={() => {toggleReferralBtn()}}>refer to employer</button></div>
            </section>
            </div>
            {/* <section className="main-title">Want Prana in Your Workplace?</section>
            <section className="main-cta">If you’d love to see a wellness program in your workplace, refer Prana Wellness to your company or HR manager and get a promo code to unlock premium content! </section>
            <button onClick={toggleReferralBtn}>refer to employer</button> */}
          {/* </div> */}
          <ServiceDisplay services={this.state.services}/>
          <section className="header-two">subscribe to personal wellness</section>
          <PackageDisplay pricePack={this.state.individualPlans}/>
    </>)
  }
}

export default IndividualMain

