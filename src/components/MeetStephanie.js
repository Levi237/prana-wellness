import React, { Component } from 'react';

import './MeetStephanie.css'

export default class MeetStephanie extends Component {
    state = {
        meetStephanie: { 
            title: "Meet Stephanie",
            subtitle: "founder, prana wellness",
            price: "$10/MONTH",
            content: "Stephanie Erazo is an avid adventure seeker and a self-proclaimed fitness junkie. Many people refer to her as their “Motivator in Chief” on their fitness journey, as she enjoys showing people that they can achieve more. Stephanie believes that a person’s physical and mental wellbeing can dictate their entire life, so she aims to motivate people to prioritize all-around wellness.",
            image: "meet-stephanie.png",
            skills: "Certified Yoga + Spin Instructor + Personal Trainer",
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