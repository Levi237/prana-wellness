import React, { Component } from 'react';

import ServiceDisplay from './ServiceDisplay'

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
            <button>Corporate Solutions</button> <button>Individual Solutions</button>
          </div>
          <section className="home-main-header">WELLNESS SERVICES</section>
          <ServiceDisplay services={this.state.otherServices}/>
          <button>Request Quote</button>
    </>)
}
}