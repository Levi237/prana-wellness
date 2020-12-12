import React, { Component } from 'react';
import styled from 'styled-components';

export default class Coaching extends Component {
    state = {
        coachingList: [
            "The Art of Pitching",
            "Sell like a closer ",
            "Targeted networking",
            "Pricing optimization",
            "Prove client ROI",
            "Motivate your team ",
            "Identify ideal clients ",
            "Identify & overcome challenges"
        ]
    };

    render(){
        const { coachingList } = this.state;
        
        const list = coachingList.map((i, k) => {
            return (
                <div key={k}>
                <img src="../checkmark/check-green.png"/><span>{i}</span>
                </div>
            );
        });

        return (
            <Container>
                <h1>GROWING YOUR BUSINESS</h1>
                <h3>Coaching Your Leadership Team to Greatness</h3>
                {list}
            </Container>
        );
    };
};

const Container = styled.div`
    font-size: 18px;
    text-align: center;
    > h3 {
        font-family: Merriweather;
        font-size: 24px;
    }
        >div {
            width: 320px;
            margin: 0 auto;
            text-align: left;
            padding: 10px;
        img {
            width: 20px;
            padding-right: 10px;
        }
    }
    @media screen and (max-width: 1200px) {

    }
`;