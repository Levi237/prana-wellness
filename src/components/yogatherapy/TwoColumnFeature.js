import React, { Component } from 'react';
import styled               from 'styled-components';

export default class TwoColumnFeature extends Component {
    state = {
        stats: {
            info1: [
                "Chronic pain",
                "Arthritis",
                "Hips",
                "Knees",
                "Shoulder",
                "Lower back",
            ],
            info2: [
                "Depression",
                "Anxiety",
                "Obesity",
                "Hypertension",
                "Accident recovery",
                "Post-surgery rehab",
            ]
        }
    };

    render(){

        return(
            <Container>
                <LeftColumn>
                    <img src="guru.png"/>
                    <div>TEST</div>
                </LeftColumn>
                <RightColumn>
                    <img src="bamboo.jpg"/>
                    <div>TEST</div>    
                </RightColumn>
            </Container>
        );
    };
};

const Container = styled.div`
    background-color: #C09EC8;
`;
const Column = styled.div`
    display: inline-block;
    font-size: 0;
    width: 50%;
    div {
        display: inline-block;
        font-size: 3vw;
        color: white;
        height: 25vw;
        width: 33.33vw;
        margin: 5vw 2.5vw;
        text-align: center;
        background-color: #fff;
    }
    img {
        width: 20vw;
        border-radius: 100%;
        border: 5px solid #C09EC8;
    }
`;
const LeftColumn = styled(Column)`
        text-align:right;
`;
const RightColumn = styled(Column)`
        text-align:left;
`;