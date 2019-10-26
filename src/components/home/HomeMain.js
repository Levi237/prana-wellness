import React, { Component } from 'react';
import { NavLink }      from 'react-router-dom';

import * as routes      from '../../constants/routes';

// import PointDisplay     from './PointDisplay';
import LotusDisplay     from './LotusDisplay';
import HomeStephanie    from './HomeStephanie';
import CustomerDisplay  from '../CustomerDisplay';
import ServiceDisplay   from '../services/ServiceDisplay';

const fourSquareStyle = {
    transform: 'scale(.75)',
    position: 'relative',
    margin: '-10px',
    // backgroundColor: 'rgba(0,0,0,.8)'
}

export default class HomeMain extends Component {
    state = {
        points: [{ 
            smallText: "Mindful",
            largeText: "Breathing",
            image: "point-placeholder.png"
        },{
            smallText: "Invigorating",
            largeText: "Yoga",
            image: "invigorating_yoga.png"
        },{
            smallText: "relaxing",
            largeText: "Meditation",
            image: "point-placeholder.png"
        },{
            smallText: "Lunch +",
            largeText: "Learn",
            image: "lunch_and_learn.png"
        }]
    };

    render(){

        return(<>
            <div className="home-main-top"><br />
            “Prana is Sanskrit for breath, considered as a life-giving force. <br/>
            Prana is seen as a universal energy, which flows in currents in and around the body.”
            </div>
            <section className="home-main-header">WELLNESS SERVICES</section>
            <ServiceDisplay services={this.state.points} transformStyle={fourSquareStyle}/>
            {/* <PointDisplay /> */}
            <br /><br /><br/>
            <NavLink to={routes.CORP}><button className="white">browse services</button></NavLink>
            <br /><br /><br/>
            <CustomerDisplay />
            <br /><br /><br/>
            <LotusDisplay />
            <HomeStephanie />
            {/* <Carousel carouselContent={this.state.quotes}/> */}
        </>);
    };
};