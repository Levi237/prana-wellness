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
        }]
    }
    render(){
    return(<>
          <div className="wellness-main-container main-title">
            <ServiceDisplay services={this.state.services}/>
          </div>
    </>)
}
}