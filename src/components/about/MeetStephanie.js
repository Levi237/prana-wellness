import React, { Component } from 'react';

import './MeetStephanie.css';

export default class MeetStephanie extends Component {
    state = {
        meetStephanie: { 
            title: "Stepahnie Erazo",
            subtitle: "founder, prana wellness",
            content: "Namaste! I know the problem of work stress all too well. I spent 7 years as a Producer for one of the largest media companies in the world. After a scary panic attack at work, I decided to follow my true passion for health and wellness. 3 days after leaving my job, I journeyed to Rishikesh, India to study yoga, meditation, and breath work. From there I knew there was no turning back. I studied under master yogis, and have a true desire to spread knowledge of those traditional practices.",
            image: "about-meet.png",
            skills: "Personal Trainer, Yoga Instructor + Boot Camp",
        }
    };

    render(){
        const { meetStephanie } = this.state;

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
            );
        };
};