import React, { Component } from 'react';

import BenefitsDisplay from './BenefitsDisplay'
import PackageDisplay from './PackageDisplay';
import OurApproach from './OurApproach';

const customQuoteStyle = {
  margin: '-150px 0 0',
  height: '40vw',
  padding: '16vw 0 0',
}

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
    return(<>
      <div className="about-main-container">
        <div className="main-title">
        <OurApproach />
            <BenefitsDisplay />
        </div>
        <PackageDisplay pricePack={this.state.corporatePlans}/>
        <div style={customQuoteStyle} className="custom-quote">DON'T SEE A PACKAGE THAT'S RIGHT?</div>
      </div>
    </>)
  }

}

