import React, { Component } from 'react';
import styled from 'styled-components';

export default class WhyYogaTherapy extends Component {
    state = {
        why: { 
            title: "Why Yoga Therapy?",
            subtitle: "WHAT I SAY TO THOSE WHO HAVEN'T TRIED IT",
            content: "Most people are unaware of the power they possess within their own body to heal itself. Yoga Therapy is a personal, tailored approach to healing both mental and physical challenges. It is the perfect marriage of Eastern and Western medicine, and an alternative to traditional methods. Every session with me, you will feel safe and free to exist in your own body and in your personal truth. Yoga Therapy is specific and focused, using traditional practices to address health challenges, reduce symptoms, restore balance, manage a condition, increase vitality, and improve mental health.",
            image: "yoga-therapy.jpg",
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
            <Container>
                <div>
                    <div>
                        <section>{why.title}</section>
                        <br/>
                        <section>{why.subtitle}</section>
                        <section>{why.content}</section>
                        <section>{why.servicesTitle}</section>
                        <ul>{servicesList}</ul>
                    </div>
                </div>
                <div><img src={`${why.image}`} alt="why-box" /></div>
            </Container>
        );
    };
};

const Container = styled.div`
    position: relative;

    img {
        width: 50vw;
        height: 50vw;
    }
    
    > div {
        width: 50vw;
        height: 50vw;
        background-color: #E0CEE5;    
        &:first-of-type {
            float: left;
            background-image: url(/static/media/meet-background.a73f4094.png);
            text-align: left;
        }
        &:last-of-type {
            float: right;  
        }

        > div {
            width: 32vw;
            height: 32vw;
            margin: 4vw;
            border: 1px solid #965BA5;
            background: #E0CEE5;
            padding: 3vw 5vw 7vw 5vw;

            > section {
                font-style: normal;
                &:first-of-type {
                    font-family: Merriweather;
                    font-style: italic;
                    font-weight: 300;
                    font-size: 2.8vw;
                    line-height: 5vw;
                    letter-spacing: .33vw;
                    color: #965BA5;
                }
                &:nth-of-type(2) {
                    font-size: 0!important;
                    display: none;
                }
                &:nth-of-type(4) {
                    font-weight: normal;
                    font-size: 1.3vw;
                    line-height: 1.5vw;
                    letter-spacing: .03vw;
                    text-transform: uppercase;
                    color: #FFFFFF;
                }
                &:nth-of-type(3) {
                    font-weight: 300;
                    font-size: 1.25vw;
                    line-height: 1.5vw;
                    color: #965BA5;
                    margin: 1vw 0;
                    height: 19vw;
                    overflow: auto;
                    background-color: transparent;
                    transition: all .3s ease-in-out;
                    transition-delay: .5s!important;
                }
            }

            > ul {
                font-weight: bold;
                font-size: 1vw;
                line-height: 1.5vw;
                padding-inline-start: 2vw;
                text-transform: uppercase;
                color: #965BA5;
                transition: all .3s ease-in-out;

                > li:last-of-type {
                    text-transform: lowercase!important;
                    list-style-type: none;
                }
            }
        }
    }

@media screen and (max-width: 945px) {

    img {
        width: 100vw;
        height: 100vw;
    }

    > div {
        width: 100vw;
        height: 100vw;
        float: off!important;
        > div {
            width: 75vw;
            height: 68vw;
            margin: 9vw;
            border: 1px solid #965BA5;
            background: #E0CEE5;
            padding: 7vw 3vw;
            > section {
                &:first-of-type {
                    font-size: 7vw;
                    letter-spacing: .33vw;
                    color: #965BA5;
                }
                 &:nth-of-type(2) {
                    font-size: 0!important;
                }
                &:nth-of-type(4) {
                    font-size: 3.1vw;
                    line-height: 9vw;
                }
                &:nth-of-type(3) {
                    font-size: 3vw;
                    line-height: 3vw;
                    margin: 0;
                    height: 40vw;
                }
                &:nth-of-type(4) {
                    font-size: 3vw;
                    line-height: 4vw;
                    margin-top: 2vw;
                }
            }
            > ul {
                font-size: 2.5vw;
                line-height: 3vw;
                margin: 1vw 0 1vw 2vw;
            }
        }
    }
`;