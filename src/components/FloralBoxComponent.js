import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default class FloralBoxComponent extends Component {

    render(){
        const { passedInfo } = this.props;

            const skillsList = passedInfo.skills.map((skill, key) => {
                if (passedInfo.skills[0] !== "none"){
                    return <span key={key}>{skill}</span>
                }
            })
            const servicesList =  passedInfo.services.map((service, key) => {
                if (passedInfo.services[0] !== "none"){
                return <li key={key}>{service}</li>
                }
            })
            return(
                <Container style={{ backgroundColor: `${passedInfo.backgroundColor}` }}>
                    <div style={{ float: `${passedInfo.boxOne}` }}>
                        <div style={{ backgroundColor: `${passedInfo.backgroundColor}` }}>
                            <section>{passedInfo.title}</section>
                            <section style={{ color: `${passedInfo.subtitleColor}` }}>{passedInfo.subtitle}</section>
                            <section>{passedInfo.content}</section>
                            { passedInfo.route && 
                                <NavLink class={passedInfo.route} to={passedInfo.route}>
                                    <button className={passedInfo.ctaColor}>
                                        {passedInfo.cta}
                                    </button>
                                </NavLink> }
                            { servicesList && 
                                <>
                                    <section>
                                        {passedInfo.servicesTitle}
                                        <ul>{ servicesList }</ul> 
                                    </section>
                                </>
                            }
                            { skillsList && <section>{skillsList}</section>}
                        </div>
                    </div>
                    <div style={{ float: `${passedInfo.boxTwo}` }}>
                        <img src={`${passedInfo.image}`} alt={passedInfo.title}/>
                    </div>
                </Container>
            );
        };
};

const Container = styled.div`
    white-space: pre-line;
    position: relative;
    height: 50vw;
    color: #965BA5;

    img {
        width: 50vw;
        height: 50vw;
    }
span {
    display: block;
}
    > div {
        width: 50vw;
        height: 50vw;

        &:first-of-type {
            // background-image: url(../meet-background.png);
            background-image: url(/static/media/meet-background.a73f4094.png);
            background-blend-mode: screen;
            text-align: left;
        }

        > div {
            width: 32vw;
            height: 32vw;
            margin: 4vw;
            border: 1px solid #965BA5;
            padding: 3vw 5vw 7vw 5vw;
            text-align: left;
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
                    font-weight: bold;
                    font-size: 1.3vw;
                    line-height: 1.5vw;
                    letter-spacing: .3vw;
                    text-transform: uppercase;
                }
                &:nth-of-type(3) {
                    font-weight: 300;
                    font-size: 1.1vw;
                    line-height: 1.5vw;
                    color: #965BA5;
                    margin: 1vw 0;
                    min-height: 19vw;
                    max-height: 50vw;
                    overflow: auto;
                    background-color: transparent;
                    transition: all .3s ease-in-out;
                    transition-delay: .5s!important;
                }
                &:last-of-type {
                    font-weight: bold;
                    font-size: 1.2vw;
                    line-height: 1.8vw;
                    text-transform: uppercase;
                }
            }
        }
    }
    
    ul {
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
    // section:hover > div > div > section:nth-of-type(3) {
    //     background-color: rgba(255,255,255,.3);
    //     margin-right: -4vw;
    //     margin-left: -4vw;
    //     padding: 0 4vw;
    //     transition: all .3s ease-in-out;
    //     box-shadow: inset 0px 0px 6px 4px #E0CEE5;
    // }
    @media screen and (max-width: 945px) {
        height: 100vw;
        img {
            width: 100vw;
            height: 100vw;
        }
span {
    display: inline-block; padding: 1vw 0; font-size: 3vw;
    &:nth-of-type(odd){

        padding-right: 2vw;
    }
}
        > div {
            width: 100vw;
            height: 100vw;

            > div {
                width: 70vw;
                height: 70vw;
                margin: 10vw;
                padding: 5vw;
                > section {
                    &:first-of-type {
                        font-size: 6vw;
                        letter-spacing: .33vw;
                    }
                    &:nth-of-type(2) {
                        font-size: 3.1vw;
                        line-height: 9vw;
                    }
                    &:nth-of-type(3) {
                        font-size: 3vw;
                        line-height: 3vw;
                        margin: 0;
                    }
                    &:nth-of-type(4) {
                        font-size: 3.6vw;
                        line-height: 5vw;
                    }
                }
            }
        }
       a.about > button {
        margin-top: 18vw;
       }

    }
`;