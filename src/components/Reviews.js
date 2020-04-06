import React, { Component } from 'react';
import styled from 'styled-components';

const desktopBreak = "620px";

const desktopWidth = 400
const desktopWinWidth = desktopWidth + "px";
const desktopWinHeight = "150px";

const mobileWidth = 250;
const mobileWinWidth =  mobileWidth + "px";
const mobileWinHeight = "120px";

const reviewsLength = 5;
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
        document.getElementById('desktop').scrollLeft += desktopWidth;
        document.getElementById('mobile').scrollLeft += mobileWidth;
    }
    scrollLeft = () => {
        document.getElementById('desktop').scrollLeft -= desktopWidth;
        document.getElementById('mobile').scrollLeft -= mobileWidth;
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
                <ArrowLeft className="left"></ArrowLeft>
                </button>
                <img className="left" src="quote.png"/>
                <WindowContainerDesktop className='desktop' id='desktop'>
                    <ReviewContainer>
                        {ReviewList}
                    </ReviewContainer>
                </WindowContainerDesktop>
                <WindowContainerMobile id='mobile'>
                    <ReviewContainer>
                        {ReviewList}
                    </ReviewContainer>
                </WindowContainerMobile>
                <img className="right" src="quote.png"/>
                <button onClick={this.scrollRight}>
                    <ArrowRight className="right"></ArrowRight>
                </button>
            </LocalWrapper> 
        );
    };
};

const LocalWrapper = styled.div`
    width: 100vw;
    height: ${mobileWinHeight};

    img {
        width: calc(50vw - 150px);
        vertical-align: middle;
        @media (min-width: ${desktopBreak}) {
            width: 30px;
        }
    }
    img.left{  
        transform: rotate(-180deg);
        -webkit-transform: rotate(-180deg);
        
        margin-right: 1vw;
        @media (min-width: ${desktopBreak}) {
            margin-right: 20px;
        }
    }
    img.right{
        margin-left: 1vw;
        @media (min-width: ${desktopBreak}) {
            margin-left: 20px;
        }
    }

    button {
        text-align: center;
        color: purple;

        width: 20px;
        height: calc(${mobileWinHeight});

        padding: 0;

        border: 0;
        overflow: hidden;
        vertical-align: top;
        display: inline-block;

        &:focus { 
            outline: none 
        }
        @media (min-width: ${desktopBreak}) {
            height: ${desktopWinHeight};
            width: 70px;
        }
    }


`;

const Arrow = styled.i`
    border: solid #744A9E;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 1vw;

    &:hover {
        border:solid pink;
        border-width: 0 1px 1px 0;
    }
    @media (min-width: ${desktopBreak}) {
        padding: 20px;
    }

  `;
const ArrowRight = styled(Arrow)`
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
`;
const ArrowLeft = styled(Arrow)`
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
`;
const WindowContainer = styled.div`
    height: ${mobileWinHeight};
    width: ${mobileWinWidth};
    margin: 0 auto;

    overflow-x: scroll;
    overflow-y: hidden;

    vertical-align: middle;
    display: inline-block;

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
    @media (min-width: ${desktopBreak}) {
        height: ${desktopWinHeight};
        width: ${desktopWinWidth};

    }

`;

const WindowContainerDesktop = styled(WindowContainer)`
@media (max-width: ${desktopBreak}) {
display: none;

}
`;
const WindowContainerMobile = styled(WindowContainer)`
    display: none;
    @media (max-width: ${desktopBreak}) {
        display: inline-block;
    }
`;

const ReviewContainer = styled.div`
    height: ${mobileWinHeight};
    width: calc(${mobileWinWidth}*${reviewsLength});
    background-color: transparent;
    display: flex;
    @media (min-width: ${desktopBreak}) {
        height: ${desktopWinHeight};
        width: calc(${desktopWinWidth}*${reviewsLength});
    }
`;

const Review = styled.div`
    width: ${mobileWinWidth};
    height: ${mobileWinHeight};
    display: inline-block;
    @media (min-width: ${desktopBreak}) {
        width: ${desktopWinWidth};
        height: ${desktopWinHeight};
    }
`;

const Text = styled.div`
    vertical-align: middle;
    height: calc(${mobileWinHeight} - 30px);
    overflow: hidden;
    vertical-align: middle;
    font-size: 10px;
    line-height: 18px;
    display: flex;
    align-items: center;
    @media (min-width: ${desktopBreak}) {
        height: calc(${desktopWinHeight} - 30px);
        font-size: ${desktopBreak};
        font-size: 13px;
        line-height: 23px;
    }
`;

const Reviewer = styled.h1`
    font-size: 11px;
    margin: 0 auto;
    display: inline-block;
    height: 30px;
    @media (min-width: ${desktopBreak}) {
        font-size: 14px;
    }
`;