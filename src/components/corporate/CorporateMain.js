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
      deals: [{
        name: "Namaste",
        price: "300"
      },{
        name: "Karma",
        price: "250"
      },{
        name: "Guru",
        price: "200"
      },{
        name: "Samadhi",
        price: "100"
      }],
      duration: ["1","4","8","20"],
      totalMonthly: ["300", "1000", "1600", "2000"],
      details: [
        {
          product: "Mix and match classes",
          included: ["/checkmark/check-green.png","/checkmark/check-green.png","/checkmark/check-green.png","/checkmark/check-purple.png"],
        },{
          product: "Hands-on guided classes",
          included: ["/checkmark/check-green.png","/checkmark/check-green.png","/checkmark/check-green.png","/checkmark/check-purple.png"],
        },{
          product: "Monthly freebie", 
          included: ["checkmark/check-blank.png","/checkmark/check-green.png","/checkmark/check-green.png","/checkmark/check-purple.png"],
        },{
          product: "Wellness events access", 
          included: ["checkmark/check-blank.png","checkmark/check-blank.png","/checkmark/check-green.png","/checkmark/check-purple.png"],
        },{
          product: "20% off Online Courses",
          included: ["checkmark/check-blank.png","checkmark/check-blank.png","/checkmark/check-green.png","/checkmark/check-purple.png"],
        },{
          product: "Monthly Lunch & Learn",
          included: ["checkmark/check-blank.png","checkmark/check-blank.png","/checkmark/check-green.png","/checkmark/check-purple.png"],
        },{
          product: "In-office Coaching",
          included: ["checkmark/check-blank.png","checkmark/check-blank.png","checkmark/check-blank.png","/checkmark/check-purple.png"],
        },{
          product: "Team building day",
          included: ["checkmark/check-blank.png","checkmark/check-blank.png","checkmark/check-blank.png","/checkmark/check-purple.png"],
        } 
      ],
    CorporatePurpleContent: {
      header: "DON'T SEE A PACKAGE THAT'S RIGHT?",
      message: "Whether you want one activity or all of them, we can help you find a program that works best for your company. Mix and match services, define your timeline, and help us understand your unique needs for wellness in the workplace.",
      value: "contactRequest",
      backgroundColor: "purple",
      button: "Bring Prana to Your Workplace",
    }
  };

  render(){
    const { details, duration, deals, totalMonthly, CorporatePurpleContent } = this.state;
    const { toggleEmailSignup } = this.props;

    return(<>
<div>
          <PranaDifference />
          <BenefitsDisplay />
        </div>
        <h1>Corporate Wellness Solutions</h1>
        <NewPackageDisplay deals={deals} details={details} totalMonthly={totalMonthly} duration={duration}/>
        <div className="custom-quote purple-content">
          <PurpleContent purpleContent={CorporatePurpleContent} toggleEmailSignup={toggleEmailSignup}/>
        </div>  
    </>);
  };
};