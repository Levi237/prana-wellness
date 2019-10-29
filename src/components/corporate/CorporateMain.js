import React, { Component } from 'react';

import BenefitsDisplay from './BenefitsDisplay';
import PackageDisplay from './PackageDisplay';
import PranaDifference from './PranaDifference';

import './CustomQuote.css';


export default class CorporateMain extends Component {
  state = {
      corporatePlans: [{ 
        title: "Namaste",
        price: "$300/session",
        // duration: ["1 x per month", "(6 month commitment)"],
        duration: "1x per month",
        secondTitle: null,
        details: ["Yoga", "Meditation", "Breathwork", "Online Resources", "*6 month commitment"],
        image: "namaste.png",
    },{
        title: "Karma",
        price: "$200/session",
        // duration: ["1 x per week", "(3 month commitment)"],
        duration: "1 x per week",
        secondTitle: "Namaste +",
        details: ["1 Lunch & Learn", "*3 month commitment"],
        image: "karma.png",
    },{
        title: "Guru",
        price: "$4500",
        duration: "12 week intensive",
        // duration: ["12 week", "intensive program"],
        secondTitle:'“Wellness for the Working Mind”',
        details: ["Wellness sessions", "Lunch & Learns", "Team building ", "*Customizable, pricing may vary*"],
        image: "guru.png",
    }]
  };

  render(){
    const { toggleContactBtn } = this.props
    return(<>
      <div className="about-main-container">
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
        <PackageDisplay pricePack={this.state.corporatePlans}/>
        <div className="custom-quote">
          <h1>DON'T SEE A PACKAGE THAT'S RIGHT?</h1>
          <section>
            <div>
              Whether you want one activity or all of them, we can help you find a program that works best for your company. Mix and match services, define your timeline, and help us understand your unique needs for wellness in the workplace.
            </div>
            <div><button className="purple mobile-fill" name="contactForm" onClick={(e) => {toggleContactBtn(e)}}>Bring Prana to Your Workplace</button></div>
          </section>
        </div>
        
      </div>
      
    </>);
  };
};

