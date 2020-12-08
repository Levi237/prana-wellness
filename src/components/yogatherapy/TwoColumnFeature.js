import React, { Component } from 'react';
import styled               from 'styled-components';

const mobileMax = "650px";

export default class TwoColumnFeature extends Component {
    state = {
        leftInfo: {
            title: 'COMMON ISSUES TREATED',
            list1: [
                'Chronic pain',
                'Arthritis',
                'Hips',
                'Knees',
                'Shoulder',
                'Lower back',
            ],
            list2: [
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
            list1: [
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

        const leftListOne = leftInfo.list1.map((data) => {
            return (<li>{data}</li>)
        })
        const leftListTwo = leftInfo.list2.map((data) => {
            return (<li>{data}</li>)
        })
        const rightListOne = rightInfo.list1.map((data) => {
            return (<li>{data}</li>)
        })

        return(
            <Container>
                <LeftColumn>
                    <img src="bamboo.jpg"/>
                    <div>
                        <h1>
                            {leftInfo.title}
                        </h1>
                        <ul>
                            {leftListOne}
                        </ul>
                        <ul>
                            {leftListTwo}
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
                            {rightListOne}
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
    @media screen and (max-width: ${mobileMax}) {
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