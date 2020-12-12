import React, { Component } from 'react';
import styled from 'styled-components';

export default class FeatureFour extends Component {
    state = {
        features: [{
            title: "Wellness for the Working Mind",
            description: "A toolbox for those seeking balance and calm at work",
            image: "coaching_wellness.jpg"
        },{
            title: "Motivation for Youth Entrepreneurs",
            description: "For eager and determined young minds",
            image: "coaching_class.jpg"
        },{
            title: "Wellness Business for Working Yogis",
            description: "For yoga instructors thinking beyond the local gym",
            image: "coaching_expand.jpg"
        },{
            title: "Scrappy Entrepreneurship",
            description: "For ANYONE with a dream, ready to take the leap",
            image: "coaching_marketing.jpg"
        }]
    };

    render(){
        const { features } = this.state;
        
        const featureList = features.map((feature, key) => {
            return (
                <div key={key} style={{ backgroundImage: `url(../features/${feature.image})` }}>
                    <div>
                        <section>{feature.title}</section>
                        <section>{feature.decription}</section>
                    </div>
                </div>
            );
        });

        return (
            <FeatureContainer>
                {featureList}
            </FeatureContainer>
        );
    };
};

const FeatureContainer = styled.div`
    width: 1200px;
    color: #fff;    
    > div {
        background-size: 80%;
        background-position: center;
        background-repeat: no-repeat;
        display: inline-block;
        width: 600px;
        height: 600px;
        font-size: 0;
        > div {
            margin: 10%;
            height: 80%;
            width: 80%;
            background-color: rgba(0,0,0,.2);
            > section {
                font-size: 14px;
                &:first-of-type {
                    font-family: Merriweather;
                }
                &:first-of-type {
                    
                }
            }
        }
    }
    @media screen and (max-width: 1200px) {
        width: 100vw;
        > div {
            width: 50vw;
            height: 50vw;
        }
    }
`;