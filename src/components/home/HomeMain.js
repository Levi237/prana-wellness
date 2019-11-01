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
            image: "mindful_breathing.png"
        },{
            smallText: "Invigorating",
            largeText: "Yoga",
            image: "invigorating_yoga.png"
        },{
            smallText: "relaxing",
            largeText: "Meditation",
            image: "relaxing_meditation.png"
        },{
            smallText: "Lunch +",
            largeText: "Learn",
            image: "lunch_and_learn.png"
        }],
        clients: [
            'bpr-logo-landscape-highres.png',
            'centric-logo.png',
            'cross-campus-high-res-logo-stacked.png',
            'DocuSign_logo.png',
            'KAPOW.png',
            'LA-South-Chamber.png',
            'salisian-lee-logo.png',
        ],
        features: [
            'voyage_la.png',
            'essence.png',
            'airbnb.png',
        ]
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