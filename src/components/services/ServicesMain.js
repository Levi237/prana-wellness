import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import ServiceDisplay from './ServiceDisplay';

import * as routes from '../../constants/routes';

export default class ServicesMain extends Component {
    state = {
        services: [{ 
            smallText: "Invigorating",
            largeText: "Yoga",
            image: "invigorating_yoga.png",
            content: "All levels practice of yoga to energize the body, stretch, and focus on proper alignment and form.",
        },{
            smallText: "Relaxing",
            largeText: "Meditation",
            image: "relaxing_meditation.png",
            content: "Accessible guided meditations to calm, bring focus, and de-stress.",
        },{
            smallText: "Mindful",
            largeText: "Breathing",
            image: "mindful_breathing.png",
            content: "Breathing practices that can have immediate impact on mind and body health.",
        }],
        otherServices: [{ 
            smallText: "Bootcamp",
            largeText: "Fitness",
            image: "bootcamp_fitness.png",
            content: "Power hour of cardio, Plyometrics, HIIT, resistance bands, and body weight exercises. Modifications for all levels.",
        },{
            smallText: "Lunch +",
            largeText: "Learn",
            image: "lunch_and_learn.png",
            content: "Health, fitness, and mindfulness tools and tips for a balanced lifestyle and productive work experience.",
        },{
            smallText: "Corporate",
            largeText: "Massage",
            image: "corporate_massage.png",
            content: "Relaxing intuitive massage break from static postures.",
        },{
            smallText: "Work",
            largeText: "Play",
            image: "work_play.png",
            content: "Take time to play at work! Fun games that focus on leadership and team building.",
        },{
            smallText: "Wellness",
            largeText: "Retreats",
            image: "wellness_retreats.png",
            content: "Curated and customizable off-site wellness retreats for team building and training, with a fitness and wellness focus.",
        },{
            smallText: "Health",
            largeText: "Fairs",
            image: "health_fairs.png",
            content: "Create a wellness fair for your office or add us on to your existing fair for various wellness sessions.",
        }]
      };

    render(){
        const { toggleContactBtn } = this.props;

        return(<>
            <div className="wellness-main-container main-title">
                <ServiceDisplay services={this.state.services}/>
                <div className="optionBtn">
                    <NavLink to={routes.CORP}><button className="purple">Corporate Solutions</button></NavLink>
                    <NavLink to={routes.WELL}><button className="purple">Individual Solutions</button></NavLink>
                </div>
            </div>
            <h1 className="services-main-header">WELLNESS SERVICES</h1>
                <ServiceDisplay services={this.state.otherServices}/>
                <div className="optionBtn">
            <button className="white" name="contactForm" onClick={(e) => {toggleContactBtn(e)}}>Request Quote</button>
            </div>
        </>);
    };
};