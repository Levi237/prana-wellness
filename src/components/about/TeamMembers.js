import React, { Component } from 'react';

import './TeamMembers.css'

export default class TeamMembers extends Component {
    state = {
        team: [{
            name: "Safiya",
            skills: [
                "300 RYT Meditation & Yoga Nidra",
                "200RYT Yoga",
                "Holistic Health Coach",
                ],
            description: "Safiya educates individuals on how to heal from anxiety and burnout while building a foundation of health to thrive through mentorship, events, and retreats. A disruptor of hustle culture, Safiya is passionate about educating people on how they can take tangible steps towards incorporating self-care and mindfulness into their daily lives. She believes that you don’t have to sacrifice health to make an impact, and that health looks different to each person.",
            image: "safiya.png",
        },{
            name: "Alexeyeva",
            skills: [
                "200CYT Meditation",
                "RYT200 Yoga",
                ],
            description: "Alexeyeva is an advocate, mentor, and educator for mindfulness and conscious breathing. She knows the power of the breath and how it can transform a situation - or a life. She believes that meditation is a call home to yourself and that the breath is a direct pathway to get there. Alexeyeva is passionate about people and curious about their lives. She enjoys creating a safe and comfortable space, free of judgment, where individuals can come to sit, slow down, explore and reconnect with themselves and their purpose through the power and sensations of their own breath. She believes in sharing practical mindfulness and breathing techniques that can be applied in daily life and that when someone is ready and willing to surrender to the power of their breath, it is an invitation for the ultimate journey of self-love to begin.",
            image: "alexeyeva.png",
        },{
            name: "Safiya",
            skills: [
                "300 RYT Meditation & Yoga Nidra",
                "200RYT Yoga",
                "Holistic Health Coach",
                ],
            description: "Safiya educates individuals on how to heal from anxiety and burnout while building a foundation of health to thrive through mentorship, events, and retreats. A disruptor of hustle culture, Safiya is passionate about educating people on how they can take tangible steps towards incorporating self-care and mindfulness into their daily lives. She believes that you don’t have to sacrifice health to make an impact, and that health looks different to each person.",
            image: "safiya.png",

        }]
    }

    render(){
        const { team } = this.state;
        
        const memberInfo = team.map((member, key) => {
            // const backgroundImageStyle = {
            //     'backgroundImage': `url(../team/${member.image})`
            // }
            const skillList = member.skills.map((skill, k) => {
                return (<><span>{skill}</span><br /></>)
            })
            return (
                <div key={key} className="team-box">
                    {/* <div className={member.description ? "member-box member-hover" : "member-box"} style={backgroundImageStyle}></div> */}
                    <div className={member.description ? "member-box member-hover" : "member-box"}>
                        <div className="member-front">
                            <div className="member-front-data member-hover">
                                <img className="member-picture" src={`../team/${member.image}`}/>
                                <section>{member.name}</section>
                                <section>{skillList}</section>
                            </div>
                        </div>
                    
                    </div>
                    <div className="member-back">
                        <section>{member.description}</section>
                    </div>
                </div>
            )
        })

        return(<>
            <div className="team-member-container">
            <h1>Meet the Team</h1>
                {memberInfo}
            </div>
        </>)
    }
}