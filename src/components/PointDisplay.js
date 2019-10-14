import React, { Component } from 'react';

export default class PointDisplay extends Component {
    state = {
        points: [{ 
            smallText: "Corporate",
            largeText: "Wellness",
        },{
            smallText: "Invigorating",
            largeText: "Yoga",
        },{
            smallText: "relaxing",
            largeText: "Meditation",
        },{
            smallText: "Mindful",
            largeText: "Breathing",
        }]
        }
    render(){
        const { points } = this.state
        console.log(points);
        const showPoints = points.map(point => {
            return(
                <div>{point.smallText}</div>
            )
        })
        return(<>{showPoints}</>)
    }
}