import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './HomeStephanie.css'

import * as routes from '../../constants/routes';

export default class HomeStephanie extends Component {
    state = {
        homeStephanie: { 
            title: "Meet Stephanie",
            subtitle: "founder, prana wellness",
            content: 
                "Determined to learn from the source, I traveled to Rishikesh, India to study yoga, meditation, and breathwork under master yogis. India challenged me both mentally and physically, and the knowledge that I gained was far beyond yoga poses. It gave me a new perspective on wellness."
            ,
            image: "home-meet.png",
        }
    };

    render(){
        const { homeStephanie } = this.state;

            return(
                <div className="homeStephanie-container">
                    <div>
                        <div>
                            <section>{homeStephanie.title}</section>
                            <section>{homeStephanie.subtitle}</section>
                            <section>{homeStephanie.content}</section>
                            <section>{homeStephanie.skills}</section>
                            <NavLink to={routes.INFO}><button className="white">Learn More</button></NavLink>
                        </div>
                    </div>
                    <div><img src={`${homeStephanie.image}`} alt="meet Stephanie home page"/></div>
                </div>
            );
        };
};