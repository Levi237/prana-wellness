import React, { Component } from 'react';

import './OurApproach.css';

export default class OurApproach extends Component {
    state = {
        ourApproach: { 
            title: "the Prana Difference",
            subtitle: "wellness in the workplace",
            content: "Show your employees you value their well-being and incorporate an on-site program today.",
            image: "our-approach.png",
            skills: ["tailored program for your company ", "All skill levels welcome", "budget friendly packages", "flexible schedules"],
        }
    };

    render(){
        const { ourApproach } = this.state;

            return(
                <div className="ourApproach-container">
                    <div>
                        <div>
                            <section>{ourApproach.title}</section>
                            <section>{ourApproach.subtitle}</section>
                            <section>{ourApproach.content}</section>
                            <div>
                                <section>{ourApproach.skills[0]}</section>
                                <section>{ourApproach.skills[1]}</section>
                                <section>{ourApproach.skills[2]}</section>
                                <section>{ourApproach.skills[3]}</section>
                            </div>
                        </div>
                    </div>
                        <div><img src={`${ourApproach.image}`} alt="ourApproach-box" /></div>
                </div>
            );
        };
};