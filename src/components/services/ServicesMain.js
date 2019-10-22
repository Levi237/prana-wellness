import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import ServiceDisplay from './ServiceDisplay';

import * as routes from '../../constants/routes';

// const  = () => {
export default class ServicesMain extends Component {
    state = {
        services: [{ 
            smallText: "Invigorating",
            largeText: "Yoga",
            image: "yoga-icon.png"
        },{
            smallText: "Relaxing",
            largeText: "Meditation",
            image: "meditation-icon.png"
        },{
            smallText: "Mindful",
            largeText: "Breathing",
            image: "breathing-icon.png"
        }],
        otherServices: [{ 
            smallText: "Invigorating",
            largeText: "Yoga",
            image: "yoga-icon.png"
        },{
            smallText: "Relaxing",
            largeText: "Meditation",
            image: "meditation-icon.png"
        },{
            smallText: "Mindful",
            largeText: "Breathing",
            image: "breathing-icon.png"
        },{
            smallText: "Invigorating",
            largeText: "Yoga",
            image: "yoga-icon.png"
        },{
            smallText: "Relaxing",
            largeText: "Meditation",
            image: "meditation-icon.png"
        },{
            smallText: "Mindful",
            largeText: "Breathing",
            image: "breathing-icon.png"
        }]
      }
    render(){
    return(<>
          <div className="wellness-main-container main-title">
            <ServiceDisplay services={this.state.services}/>
            <NavLink to={routes.CORP}><button>Corporate Solutions</button></NavLink>
            <NavLink to={routes.WELL}><button>Individual Solutions</button></NavLink>
          </div>
          <section className="home-main-header">WELLNESS SERVICES</section>
          <ServiceDisplay services={this.state.otherServices}/>
          <button>Request Quote</button>
    </>)
}
}