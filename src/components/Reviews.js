import React, { Component } from 'react';
import styled from 'styled-components';


const winWidth = "400px";
const winHeight = "150px";
const desktopBreak = "620px";
export default class Reviews extends Component { 
    state = {
        reviews: [{
            name: "KAPOW, Chicago",
            quote: "Prana Wellness came to our office to host a 1 hour yoga and meditation class and it was absolutely wonderful! Stephanie was so knowledgeable in her craft and has such a calming presence that makes you feel immediately at ease..."
        },{
            name: "Aaron, LAPD Captain",
            quote: "Stephanie was amazing! Lots of great feedback from the class participants and an excellent workout experience. Go Yoga!"
        },{
            name: "Sophia, VidaCher",
            quote: "Stephanie was amazing. She gave me a specific yoga pose that really helped my sciatic nerve... I was able to actually straighten out and walk normally after doing this pose. Can't recommend (Prana Wellness) enough!"
        },{
            name: "Sarah Jo, Cross Campus DTLA",
            quote: "Prana Wellness meditation and yoga classes have added so much value to our work space. Our office members express their gratitude regularly... Cross Campus loves you!"
        },{
            name: "Ceilidh jeans, Ballantines PR",
            quote: "It was so needed! I can’t explain the shift in attitude from before to after in the whole team. It was such a GIFT!"
        }]
    }

    scrollRight = () => {
        document.getElementById('reviews').scrollLeft += 400;
    }
    scrollLeft = () => {
        document.getElementById('reviews').scrollLeft -= 400;
    }

    render(){

        const { reviews } = this.state
            const ReviewList = reviews.map((review, key) => {
                return (
                    <Review key={key}>
                        <Text>{review.quote}</Text>
                        <Reviewer>{"- "}{review.name}</Reviewer>
                    </Review>
                )
            })

        return(
            <LocalWrapper>
                <button onClick={this.scrollLeft}>
                <i className="arrow left"></i>
                </button>
                <img className="left" src="quote.png"/>
                <WindowContainer id='reviews'>
                    <ReviewContainer>
                        {ReviewList}
                    </ReviewContainer>
                </WindowContainer>
                <img className="right" src="quote.png"/>
                <button onClick={this.scrollRight}>
                    <i className="arrow right"></i>
                </button>
            </LocalWrapper> 
        );
    };
};

const LocalWrapper = styled.div`
    width: 100vw;
    height: ${winHeight};
    img {
        width: 30px;
        vertical-align: middle;
    }
    img.left{
        margin-right: 20px;
        transform: rotate(-180deg);
        -webkit-transform: rotate(-180deg);
    }
    img.right{
        margin-left: 20px;
    }
    button {
        padding: 0;
        height: calc(${winHeight});
        width: 70px;
        overflow: hidden;
        display: inline-block;
        font-size:20px;
        border: 0;
        color: purple;
        vertical-align: top;
        text-align: center;
    }
    button:focus { outline:none }
    i {
        border: solid #744A9E;
        border-width: 0 1px 1px 0;
        display: inline-block;
        padding: 20px;

      }
      i.right {
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
      }
      i.left {
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
      }
`;

const WindowContainer = styled.div`
    height: ${winHeight};
    width: ${winWidth};
    overflow-x: scroll;
    overflow-y: hidden;
    margin: 0 auto;
    display: inline-block;
    vertical-align: middle;
    
    ::-webkit-scrollbar {
        -webkit-appearance: none;
    }
    ::-webkit-scrollbar:horizontal {
        height: 11px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 8px;
        border: 2px solid white; /* should match background, can't be transparent */
        background-color: rgba(191,158,200,.5);
    }
`;

const ReviewContainer = styled.div`
    height: ${winHeight};
    width: 2000px;
    background-color: transparent;
    display: flex;
`;

const Review = styled.div`
    width: ${winWidth};
    height: ${winHeight};
    display: inline-block;
`;

const Text = styled.div`
    vertical-align: middle;
    height: 120px;
    overflow: hidden;
    vertical-align: middle;
    font-size: 13px;
    line-height: 23px;
    display: flex;
    align-items: center;
`;

const Reviewer = styled.h1`
    font-size: 14px;
    margin: 0 auto;
    display: inline-block;
    height: 30px;
`;