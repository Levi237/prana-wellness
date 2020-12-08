import React, { Component } from 'react';

import './WhyYogaTherapy.css';

export default class WhyYogaTherapy extends Component {
    state = {
        why: { 
            title: "Why Yoga Therapy?",
            subtitle: "WHAT I SAY TO THOSE WHO HAVEN'T TRIED IT",
            content: "Most people are unaware of the power they possess within their own body to heal itself. Yoga Therapy is a personal, tailored approach to healing both mental and physical challenges. It is the perfect marriage of Eastern and Western medicine, and an alternative to traditional methods. Every session with me, you will feel safe and free to exist in your own body and in your personal truth. Yoga Therapy is specific and focused, using traditional practices to address health challenges, reduce symptoms, restore balance, manage a condition, increase vitality, and improve mental health.",
            image: "about-meet.png",
            servicesTitle: "HOW CAN WE WORK TOGETHER?",
            services: [
                'Private one on one Yoga Therapy',
                'Onsite Yoga Therapist at your medical office',
                'Focused workshops for your clients:',
                'lower back, shoulder opener; reduce anxiety'
            ]
        }
    };

    render(){
        const { why } = this.state;
        const ws = why.services
        const servicesList =  ws.map((service, key) => {
            return <li key={key}>{service}</li>
        })

        return(
            <div className="why-container">
                <div>
                    <div>
                        <section>{why.title}</section>
                        <section>{why.subtitle}</section>
                        <section>{why.content}</section>
                        <section>{why.servicesTitle}</section>
                        <ul>{servicesList}</ul>
                    </div>
                </div>
                <div><img src={`${why.image}`} alt="why-box" /></div>
            </div>
        );
    };
};