import React, { Component } from 'react';
import styled               from 'styled-components';

export default class TwoColumnFeature extends Component {
    state = {
        leftInfo: {
            title: 'COMMON ISSUES TREATED',
            info1: [
                'Chronic pain',
                'Arthritis',
                'Hips',
                'Knees',
                'Shoulder',
                'Lower back',
            ],
            info2: [
                'Depression',
                'Anxiety',
                'Obesity',
                'Hypertension',
                'Accident recovery',
                'Post-surgery rehab',
            ]
        },
        rightInfo: {
            title: 'CUSTOMIZED THERAPY',
            info1: [
                'Thorough physical evaluation',
                'Custom "yoga prescription"',
                'Complimentary consult',
                'Weekly sessions',
                'Virtual and in-person',
                'Specialist referral network:',
                '(chiropractic, MD, physical therapy)'          
            ],
        }
    };

    render(){
        const { leftInfo, rightInfo } = this.state
        return(
            <Container>
                <LeftColumn>
                    <img src="bamboo.jpg"/>
                    <div>
                        <h1>
                            {leftInfo.title}
                        </h1>
                        <ul>
                            <li>{leftInfo.info1[0]}</li>
                            <li>{leftInfo.info1[1]}</li>
                            <li>{leftInfo.info1[2]}</li>
                            <li>{leftInfo.info1[3]}</li>
                            <li>{leftInfo.info1[4]}</li>
                            <li>{leftInfo.info1[5]}</li>
                        </ul>
                        <ul>
                            <li>{leftInfo.info2[0]}</li>
                            <li>{leftInfo.info2[1]}</li>
                            <li>{leftInfo.info2[2]}</li>
                            <li>{leftInfo.info2[3]}</li>
                            <li>{leftInfo.info2[4]}</li>
                            <li>{leftInfo.info2[5]}</li>
                        </ul>
                    </div>
                </LeftColumn>
                <RightColumn>
                    <img src="guru.png"/>
                    <div>                        
                        <h1>
                            {rightInfo.title}
                        </h1>
                        <ul>
                            <li>{rightInfo.info1[0]}</li>
                            <li>{rightInfo.info1[1]}</li>
                            <li>{rightInfo.info1[2]}</li>
                            <li>{rightInfo.info1[3]}</li>
                            <li>{rightInfo.info1[4]}</li>
                            <li>{rightInfo.info1[5]}</li>
                            <li>{rightInfo.info1[6]}</li>
                        </ul>
                    </div>    
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
    vertical-align: top;
    div {
        display: inline-block;
        font-size: 3vw;
        color: white;
        height: 25vw;
        width: 35vw;
        margin: 5vw 2.5vw;
        text-align: center;
        background-color: #fff;
        color: black;
    }
    img {
        position: absolute;
        margin: 9vw 3.5vw;
        width: 15vw;
        border-radius: 100%;
        border: 1vw solid #C09EC8;
        background-color: #C09EC8;
    }
    h1 {
        font-size: 1.8vw;
        color: green;
        margin-block-end: 1vw!important;
    }
    ul {
        display: inline-block;
        font-size: 1.25vw;
        color: purple;
        text-align: left;
        line-height: 2.25vw;
        margin-block-start: 1vw;
        margin-block-end: 1vw;
        padding-inline-start: 3vw;
    }
`;
const LeftColumn = styled(Column)`
        div {
            margin-left: 12.5vw;
        }
        img {
            left: 0;
        }
        ul {
        }
        ul:first-of-type {
            margin-left: 5vw;
        }
`;
const RightColumn = styled(Column)`
        div {
            margin-right: 12.5vw;
        }
        img {
            right: 0;
        }
        ul {
            margin-right: 5vw;
        }
        li:last-of-type {
            list-style-type: none;
        }
`;