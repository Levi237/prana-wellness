import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import ServiceDisplay from './ServiceDisplay';

import * as routes from '../../constants/routes';

export default class ServicesMain extends Component {
    state = {
        services: [{ 
            smallText: "Invigorating",
            largeText: "Yoga",
            image: "yoga-icon.png",
            content: "All levels practice of yoga to energize the body, stretch, and focus on proper alignment and form.",
        },{
            smallText: "Relaxing",
            largeText: "Meditation",
            image: "meditation-icon.png",
            content: "Accessible guided meditations to calm, bring focus, and de-stress.",
        },{
            smallText: "Mindful",
            largeText: "Breathing",
            image: "breathing-icon.png",
            content: "Breathing practices that can have immediate impact on mind and body health.",
        }],
        otherServices: [{ 
            smallText: "Bootcamp",
            largeText: "Fitness",
            image: "shavasana.png",
            content: "Power hour of cardio, Plyometrics, HIIT, resistance bands, and body weight exercises. Modifications for all levels.",
        },{
            smallText: "Lunch +",
            largeText: "Learn",
            image: "meditation-icon.png",
            content: "Health, fitness, and mindfulness tools and tips for a balanced lifestyle and productive work experience.",
        },{
            smallText: "Corporate",
            largeText: "Massage",
            image: "breathing-icon.png",
            content: "Relaxing intuitive massage break from static postures.",
        },{
            smallText: "Work",
            largeText: "Play",
            image: "office-yoga.png",
            content: "Take time to play at work! Fun games that focus on leadership and team building.",
        },{
            smallText: "Wellness",
            largeText: "Retreats",
            image: "retreat-other-services.png",
            content: "Curated and customizable off-site wellness retreats for team building and training, with a fitness and wellness focus.",
        },{
            smallText: "Health",
            largeText: "Fairs",
            image: "breathing-icon.png",
            content: "Create a wellness fair for your office or add us on to your existing fair for various wellness sessions.",
        }]
      };

    render(){
        const { toggleContactBtn } = this.props;

        return(<>
            <div className="wellness-main-container main-title">
                <ServiceDisplay services={this.state.services}/>
                <NavLink to={routes.CORP}><button>Corporate Solutions</button></NavLink>
                <NavLink to={routes.WELL}><button>Individual Solutions</button></NavLink>
            </div>
            <section className="home-main-header">WELLNESS SERVICES</section>
                <ServiceDisplay services={this.state.otherServices}/>
            <button name="contactForm" onClick={(e) => {toggleContactBtn(e)}}>Request Quote</button>
        </>);
    };
};