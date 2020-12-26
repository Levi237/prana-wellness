import React, { Component } from 'react';

import FloralBoxComponent from '../FloralBoxComponent';
export default class HomeStephanie extends Component {
    state = {
        homeStephanie: { 
            title: "Meet Stephanie",
            subtitle: "founder, prana wellness",
            skills: [" "],
            services: ["none"],
            content: 
                "Determined to learn from the source, I traveled to Rishikesh, India to study yoga, meditation, and breathwork under master yogis. India challenged me both mentally and physically, and the knowledge that I gained was far beyond yoga poses. It gave me a new perspective on wellness.",
            image: "home-meet.png",
            boxOne: "right",
            boxTwo: "left",
            backgroundColor: "#FFF",
            subtitleColor: "#A0CD4D",
            route: "about",
            cta: "Learn More",
            ctaColor: "#FFF",
        }
    };
    render(){
        return ( <FloralBoxComponent passedInfo={this.state.homeStephanie}/> );
    };
};