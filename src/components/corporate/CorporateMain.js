import React, { Component } from 'react';

import BenefitsDisplay from './BenefitsDisplay'
import PackageDisplay from './PackageDisplay';
import OurApproach from './OurApproach';

import './CustomQuote.css'


export default class CorporateMain extends Component {
  state = {
      corporatePlans: [{ 
        title: "Namaste",
        price: "$300/session",
        duration: ["1 x per month", "(6 month commitment)"],
        secondTitle: null,
        details: ["Mix of yoga, meditation, and breath work", "Access to online resources", "*See add ons for additional services"],
        image: "namaste.png",
    },{
        title: "Karma",
        price: "$200/session",
        duration: ["1 x per week", "(3 month commitment)"],
        secondTitle: null,
        details: ["Access to online resources", "1 lunch and learn included", "*See add ons for additional services"],
        image: "karma.png",
    },{
        title: "Guru",
        price: "$4500",
        duration: ["12 week", "intensive program"],
        secondTitle:'“Wellness for the Working Mind”',
        details: ["Combination of lunch and learns, wellness classes,", "and team building exercises", "*Customizable, pricing may vary*"],
        image: "guru.png",
    }]
  }

  render(){
    const { toggleReferralBtn } = this.props
    return(<>
      <div className="about-main-container">
        <div className="main-title">
        <OurApproach />
            <BenefitsDisplay />
        </div>
        <PackageDisplay pricePack={this.state.corporatePlans}/>
        <div className="custom-quote">
          <section>DON'T SEE A PACKAGE THAT'S RIGHT?</section>
          <section>
            <div>
              Whether you want one activity or all of them, we can help you find a program that works best for your company. Mix and match services, define your timeline, and help us understand your unique needs for wellness in the workplace.
            </div>
            <div><button name="contactForm" onClick={(e) => {toggleReferralBtn(e)}}>Request Quote</button></div>
          </section>
        </div>
        
      </div>
      
    </>)
  }

}

