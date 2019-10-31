import React, { Component } from 'react';

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
        // secondTitle: " ",
        details: ["Yoga", "Meditation", "Breathwork", "Online Resources"],
        star: "*6 month commitment",
        image: "namaste.png",
    },{
        title: "Karma",
        price: "$200/session",
        duration: "1 x per week",
        secondTitle: "Namaste +",
        details: ["1 Lunch & Learn", "Access to special events"],
        star:  "*3 month commitment",
        image: "karma.png",
    },{
        title: "Guru",
        price: "$4500",
        duration: "12 week intensive",
        secondTitle: "Karmic + Namaste",
        details: ["Wellness sessions", "Team building "],
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
        <h1>Corporate Wellness Sollutions</h1>
        <PackageDisplay pricePack={corporatePlans}/>

        <div className="custom-quote purple-content">
          <PurpleContent content={CorporatePurpleContent} toggle={toggleContactBtn}/>
        </div>
        
      </div>
      
    </>);
  };
};

