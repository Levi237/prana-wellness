import React, { Component } from 'react';

import './MeetStephanie.css'

export default class MeetStephanie extends Component {
    state = {
        meetStephanie: { 
            title: "Meet the Founder",
            // subtitle: "founder, prana wellness",
            content: "Stephanie Erazo is an avid adventure seeker and a self-proclaimed fitness junkie. Many people refer to her as their “Motivator in Chief” on their fitness journey, as she enjoys showing people that they can achieve more. Stephanie believes that a person’s physical and mental wellbeing can dictate their entire life, so she aims to motivate people to prioritize all-around wellness.",
            image: "about-meet.png",
            skills: "I am an avid adventure seeker and travel junkie, always on the move. In addition to the wellness studied in India, I also teach spin, bootcamp, and personal training. Food is really the way to my heart! ",
        }
    }
    render(){
        const { meetStephanie } = this.state

            return(
                <div className="meetStephanie-container">
                    <div>
                        <div>
                            <section>{meetStephanie.title}</section>
                            <section>{meetStephanie.subtitle}</section>
                            <section>{meetStephanie.content}</section>
                            <section>{meetStephanie.skills}</section>
                        </div>
                    </div>
                    <div><img src={`${meetStephanie.image}`} alt="meetStephanie-box" /></div>
                </div>
            )

        }
}