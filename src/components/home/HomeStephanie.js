import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import * as routes from '../../constants/routes';

export default class HomeStephanie extends Component {
    state = {
        homeStephanie: { 
            title: "Meet Stephanie",
            subtitle: "founder, prana wellness",
            content: 
                "Determined to learn from the source, I traveled to Rishikesh, India to study yoga, meditation, and breathwork under master yogis. India challenged me both mentally and physically, and the knowledge that I gained was far beyond yoga poses. It gave me a new perspective on wellness.",
            image: "home-meet.png",
        }
    };

    render(){
        const { homeStephanie } = this.state;

            return(
                <Container>
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
                </Container>
            );
        };
};

const Container = styled.div`
    position: relative;
    height: 50vw;

section {
    font-style: normal;
}

img {
    width: 50vw;
    height: 50vw;
}
> div {
    width: 50vw;
    height: 50vw;
    background-color: #fff;
}
> div:first-of-type {
    float: right;
    background-image: url(/static/media/meet-background.a73f4094.png);
    text-align: left;
}
> div:last-of-type {
    float: left;  
}

> div > div {
    width: 30vw;
    height: 30vw;
    margin: 5vw;
    border: 1px solid #965BA5;
    background-color: #fff;
    padding: 5vw;
    text-align: left;
}

> div > div > section:first-of-type {
    font-family: Merriweather;
    font-style: italic;
    font-weight: 300;
    font-size: 2.8vw;
    line-height: 5vw;
    letter-spacing: .33vw;
    color: #965BA5;
}
> div > div > section:nth-of-type(2) {
    font-weight: bold;
    font-size: 1.3vw;
    line-height: 1.5vw;
    letter-spacing: .3vw;
    text-transform: uppercase;
    color: #A0CD4D;
}
> div > div > section:nth-of-type(3) {
    font-weight: 300;
    font-size: 1.1vw;
    line-height: 1.5vw;
    color: #965BA5;
    margin: 2vw 0;
}
> div > div > section:nth-of-type(4) {
    font-weight: bold;
    font-size: 1.2vw;
    line-height: 1.8vw;
    text-transform: uppercase;
    color: #965BA5;
    margin-top: 8vw;
}

@media screen and (max-width: 945px) {

    > div {
        width: 100vw;
        height: 100vw;
    }
    img {
        width: 100vw;
        height: 100vw;
    }
    
    > div:first-of-type, > div:last-of-type {
        float: off;
    }

    > div > div {
        width: 70vw;
        height: 70vw;
        margin: 10vw;
        padding: 5vw;
    }
    > div > div > section:first-of-type {
        font-size: 7vw;
        letter-spacing: .33vw;
    }
    > div > div > section:nth-of-type(2) {
        font-size: 3.1vw;
        line-height: 9vw;
    }
    > div > div > section:nth-of-type(3) {
        font-size: 3vw;
        line-height: 3vw;
        margin: 2vw 0;
    }
    > div > div > section:nth-of-type(4) {
        font-size: 3.6vw;
        line-height: 5vw;
        margin-top: 18vw;
    }

`;