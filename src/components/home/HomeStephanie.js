import React, { Component } from 'react';

import './HomeStephanie.css'

export default class HomeStephanie extends Component {
    state = {
        homeStephanie: { 
            title: "Meet Stephanie",
            subtitle: "founder, prana wellness",
            content: "Stephanie Erazo is a certified yoga and spin instructor and personal trainer. Many people refer to her as their “Motivator in Chief” when it comes to wellness. Stephanie believes that a person’s physical and mental wellbeing can dictate their entire life, so she aims to motivate people to prioritize all-around wellness.",
            image: "home-meet.png",
            // skills: "Certified Yoga + Spin Instructor Personal Trainer",
        }
    }
    render(){
        const { homeStephanie } = this.state

            return(
                <div className="homeStephanie-container">
                    <div>
                        <div>
                            <section>{homeStephanie.title}</section>
                            <section>{homeStephanie.subtitle}</section>
                            <section>{homeStephanie.content}</section>
                            <section>{homeStephanie.skills}</section>
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div><img src={`${homeStephanie.image}`} alt="homeStephanie-box" /></div>
                </div>
            )

        }
}