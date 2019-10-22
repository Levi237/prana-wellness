import React, { Component } from 'react';

import BenefitsDisplay from './BenefitsDisplay'
import PackageDisplay from './PackageDisplay';

export default class CorporateMain extends Component {
  state = {
      corporatePlans: [{ 
        title: "Namaste",
        price: "$300/session",
        duration: ["1 x per month", "(6 month commitment)"],
        details: ["Can be a mix of yoga, meditation, and/or breath work", "*See add ons for additional services"],
        image: "namaste.png",
    },{
        title: "Karma",
        price: "$200/session",
        duration: ["1 x per week", "(3 month commitment)"],
        details: ["Access to online meditations", "1 lunch and learn ", "*See add ons for additional services"],
        image: "karma.png",
    },{
        title: "Guru",
        price: "$4500",
        duration: ["12 week", "intensive program"],
        details: ['“Wellness for the Working Mind”', "Combination of lunch and learns, speakers, wellness classes, and team building exercises Access to various online wellness resources- yoga, stretching, breath work, meditation", "*Customizable, pricing may vary*"],
        image: "guru.png",
    }]
  }

  render(){
    return(<>
      <div className="about-main-container">
        <div className="main-title">
            <BenefitsDisplay />
        </div>
        <PackageDisplay pricePack={this.state.corporatePlans}/>
      </div>
    </>)
  }

}

