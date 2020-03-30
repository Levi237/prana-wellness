import React, { Component } from 'react';

import './MeetStephanie.css';

export default class MeetStephanie extends Component {
    state = {
        meetStephanie: { 
            title: "Stepahnie Erazo",
            subtitle: "Meet the Founder",
            content: "Namaste! I know the problem of work stress all too well. I spent 7 years as a Producer for one of the largest media companies in the world. I had an exciting, rewarding, and fast-paced role there, where I got to network and mingle with many influential public figures. However, after a scary panic attack at work, I decided to follow my true passion for health and wellness. 3 days after leaving my job, I journeyed to Rishikesh, India to study yoga, meditation, and breath work. From there I knew there was no turning back. I studied under master yogis, and have a true desire to spread knowledge of those traditional practices.I am an avid adventure seeker and travel junkie, always on the move. I have been to over 25 countries, lived in Costa Rica, and Spain, and am fluent in Spanish. In my free time, you can find me cooking, boxing, hiking, traveling, playing with my dog Beamer, or trying new restaurants.",
            image: "about-meet.png",
            skills: [
                'RYT 200, meditation + breath work',
                'Yoga Therapy RX (candidate LMU)',
                'Spin Instructor',
                'Bootcamp Instructor',
                'Personal Trainer',
            ]

        }
    };

    render(){
        const { meetStephanie } = this.state;
        const skillSet = meetStephanie.skills
        const founderSkills =  skillSet.map((skill, key) => {
            return <><span key={key}>{skill}</span><br /></>
        })

            return(
                <div className="meetStephanie-container">
                    <div>
                        <div>
                            <section>{meetStephanie.title}</section>
                            <section>{meetStephanie.subtitle}</section>
                            <section>{meetStephanie.content}</section>
                            <section>{founderSkills}</section>
                        </div>
                    </div>
                    <div><img src={`${meetStephanie.image}`} alt="meetStephanie-box" /></div>
                </div>
            );
        };
};