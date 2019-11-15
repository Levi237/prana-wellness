import React, { Component } from 'react';
import { NavLink }      from 'react-router-dom';

import * as routes      from '../../constants/routes';

import LotusDisplay     from './LotusDisplay';
import HomeStephanie    from './HomeStephanie';
import LogoDisplay      from '../LogoDisplay';
import ServiceDisplay   from '../services/ServiceDisplay';

const fourSquareStyle = {
    transform: 'scale(.75)',
    position: 'relative',
    margin: '-1vw',
}

export default class HomeMain extends Component {
    state = {
        points: [{ 
            smallText: "Mindful",
            largeText: "Breathing",
            image: "mindful_breathing.png",
            content: "Breathing practices that can have immediate impact on mind and body health.",
        },{
            smallText: "Invigorating",
            largeText: "Yoga",
            image: "invigorating_yoga.png",
            content: "All levels practice of yoga to energize the body, stretch, and focus on proper alignment and form.",
        },{
            smallText: "relaxing",
            largeText: "Meditation",
            image: "relaxing_meditation.png",
            content: "Accessible guided meditations to calm, bring focus, and de-stress.",
        },{
            smallText: "Lunch +",
            largeText: "Learn",
            image: "lunch_and_learn.png",
            content: "Health, fitness, and mindfulness tools and tips for a balanced lifestyle and productive work experience.",
        }],
        clients: [{
            name: 'bpr-logo-landscape-highres.png',
            link: null
        },{
            name: 'centric-logo.png',
            link: null
        },{    
            name: 'cross-campus-high-res-logo-stacked.png',
            link: null
        },{
            name: 'DocuSign_logo.png',
            link: null
        },{
            name: 'KAPOW.png',
            link: null
        },{
            name: 'LA-South-Chamber.png',
            link: null
        },{
            name: 'salisian-lee-logo.png',
        }],
        features: [{
            name: 'voyage_la.png',
            link: 'http://voyagela.com/interview/meet-stephanie-erazo-travel-slay-fitness-mid-wilshiregrove/'
        },{
            name: 'essence.png',
            link: 'https://www.essence.com/lifestyle/travel/this-fitness-guru-takes-travelers-on-international-voyages-to-pull-them-out-of-their-comfort-zones/'
        },{
            name: 'airbnb.png',
            link: 'https://www.airbnb.com/experiences/799124'   
        }]
    };

    render(){

        return(<div className="home-container">
            <div className="home-main-top"><br />
                “Prana is Sanskrit for breath, considered as a life-giving force. <br/>
                Prana is seen as a universal energy, which flows in currents in and around the body.”
            </div>
            <h1 className="home-main-header">WELLNESS SERVICES</h1>
            <ServiceDisplay services={this.state.points} transformStyle={fourSquareStyle}/>
            <NavLink to={routes.SERV}><button className="white mobile-fill">browse services</button></NavLink>
            <br /><br /><br/><br/><br/>
            <h1>Our Clients</h1>
            <LogoDisplay logos={this.state.clients}/>
            <br /><br /><br/>
            <LotusDisplay />
            <HomeStephanie />
            <br /><br /><br/>            
            <br /><br /><br/>
            <h1>As featured In</h1>
            <LogoDisplay logos={this.state.features}/>
        </div>);
    };
};