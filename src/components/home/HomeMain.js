import React, { Component } from 'react';
import styled               from 'styled-components';
import { NavLink }          from 'react-router-dom';

import * as routes          from '../../constants/routes';

import LotusDisplay         from './LotusDisplay';
import HomeStephanie        from './HomeStephanie';

import LogoDisplay          from '../LogoDisplay';
import ServiceDisplay       from '../services/ServiceDisplay';

import Reviews from '../Reviews';

const fourSquareStyle = {
    transform: 'scale(.75)',
    position: 'relative',
    margin: '-1vw',
}

export default class HomeMain extends Component {
    state = {
        points: [{ 
            smallText: "Mindful",
            largeText: "Breathing",
            image: "mindful_breathing.png",
            content: "Breathing practices that can have immediate impact on mind and body health.",
        },{
            smallText: "Invigorating",
            largeText: "Yoga",
            image: "invigorating_yoga.png",
            content: "All levels practice of yoga to energize the body, stretch, and focus on proper alignment and form.",
        },{
            smallText: "relaxing",
            largeText: "Meditation",
            image: "relaxing_meditation.png",
            content: "Accessible guided meditations to calm, bring focus, and de-stress.",
        },{
            smallText: "Lunch +",
            largeText: "Learn",
            image: "lunch_and_learn.png",
            content: "Health, fitness, and mindfulness tools and tips for a balanced lifestyle and productive work experience.",
        }],
        clients: [{
            name: 'bpr-logo-landscape-highres.png',
            link: null
        },{
            name: 'centric-logo.png',
            link: null
        },{    
            name: 'cross-campus-high-res-logo-stacked.png',
            link: null
        },{
            name: 'DocuSign_logo.png',
            link: null
        },{
            name: 'KAPOW.png',
            link: null
        },{
            name: 'LA-South-Chamber.png',
            link: null
        },{
            name: 'salisian-lee-logo.png',
            link: null
        },{
            name: 'bpr-logo-landscape-highres.png',
            link: null
        },{
            name: 'centric-logo.png',
            link: null
        },{    
            name: 'cross-campus-high-res-logo-stacked.png',
            link: null
        },{
            name: 'DocuSign_logo.png',
            link: null
        },{
            name: 'KAPOW.png',
            link: null
        },{
            name: 'LA-South-Chamber.png',
            link: null
        },{
            name: 'salisian-lee-logo.png',
            link: null
        }],
        features: [{
            name: 'voyage_la.png',
            link: 'http://voyagela.com/interview/meet-stephanie-erazo-travel-slay-fitness-mid-wilshiregrove/'
        },{
            name: 'essence.png',
            link: 'https://www.essence.com/lifestyle/travel/this-fitness-guru-takes-travelers-on-international-voyages-to-pull-them-out-of-their-comfort-zones/'
        },{
            name: 'airbnb.png',
            link: 'https://www.airbnb.com/experiences/799124'   
        }]
    };

    render(){
        const { points, clients, features} = this.state

        return(
            <HomeContainer>
                <Quote>
                    <Center>
                        “Prana is Sanskrit for breath, considered as a life-giving force.
                            <br/>
                        Prana is seen as a universal energy, which flows in currents in and around the body.”
                    </Center>
                </Quote>
                <Header className="home-main-header">WELLNESS SERVICES</Header>
                <ServiceDisplay services={points} transformStyle={fourSquareStyle}/>
                <NavLink to={routes.SERV}><button className="white mobile-fill">browse services</button></NavLink>
            
                <h1>Our Clients</h1>
                <LogoDisplay logos={clients} clients={clients}/>  
                <br/><br/>       
                <LotusDisplay />
                <HomeStephanie />          
                <LogoHeader>As featured In</LogoHeader>
                <LogoDisplay logos={features}/>
                <br/><br/><br/>
                <ReviewsHeader>
                    see why people love prana
                </ReviewsHeader>
      <Reviews/>
      <br/><br/><br/>
            </HomeContainer>
        );
    };
};

const ReviewsHeader = styled.h1`

`;

const LogoHeader = styled.h1`
background-color: rgba(150,91,165,0.2);
margin-bottom: 0;
padding 2vw;
position: static;
@media and (max-width: 945px){
    position: relative;
}
`;

const Break = styled.br`
    @media (max-width: 945px){
        display: none
    }
`;
const HomeContainer = styled.div`

`;
const Quote = styled.div`
    font-family: 'Merriweather', sans-serif;
    position: relative;
    margin: -6vw auto;
    width: 90vw;
    height: 12vw;
    background: #965BA5;
    color: #FFF;
    font-style: italic;
    font-size: 1.6vw;
    text-align: center;
    display: flex;
    @media (max-width: 945px){
        position: absolute;
        width: 100vw;
        bottom: 0;;
        // margin-top: calc(50vh - 20vw);
        font-size: 2.25vw;
 
        height: 20vw;
        margin: 0 auto;
    }
`;

const Header = styled.h1`
margin: 128px auto 50px auto; 
    @media screen and (max-width: 945px) {
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      text-align: center;
      text-transform: uppercase;
      margin: 60px auto 50px auto;
      color: #965ba5;
    }
`;
const Center = styled.span`
    text-align: center;
    vertical-align: middle;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
`;