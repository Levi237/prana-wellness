import React, { Component } from 'react';

import './ServicesDisplay.css'

export default class ServiceDisplay extends Component {
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
        const { services } = this.state
        const showServices = services.map((service, key) => {
            return(
                <div key={key} className="service-box">
                    <div>
                        <section>{service.smallText}</section><section>{service.largeText}</section>
                    </div>
                    <img className="serviceBackgroundImage" src={`${service.image}`} alt="service-box" />
                </div>
            )
        })
        return(<>{showServices}</>)
    }
}