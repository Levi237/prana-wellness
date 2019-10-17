import React, { Component } from 'react';

import './PointDisplay.css'

export default class PointDisplay extends Component {
    state = {
        points: [{ 
            smallText: "Corporate",
            largeText: "Wellness",
            image: "point-placeholder.png"
        },{
            smallText: "Invigorating",
            largeText: "Yoga",
            image: "point-placeholder.png"
        },{
            smallText: "relaxing",
            largeText: "Meditation",
            image: "point-placeholder.png"
        },{
            smallText: "Mindful",
            largeText: "Breathing",
            image: "point-placeholder.png"
        }]
    }
    render(){
        const { points } = this.state
        const showPoints = points.map((point, key) => {
            return(
                <div key={key} className="point-box">
                    <div>
                        <section>{point.smallText}</section><section>{point.largeText}</section>
                    </div>
                    <img className="pointBackgroundImage" src={`${point.image}`} alt="point-box" />
                </div>
            )
        })
        return(<>{showPoints}</>)
    }
}