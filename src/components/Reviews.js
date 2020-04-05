import React, { Component } from 'react';
import styled from 'styled-components';


const btn = document.getElementById('button')
  
export default class Reviews extends Component { 
    state = {
        reviews: [{
            id: 1,
            name: "KAPOW, Chicago",
            quote: "Prana Wellness came to our office to host a 1 hour yoga and meditation class and it was absolutely wonderful! Stephanie was so knowledgeable in her craft and has such a calming presence that makes you feel immediately at ease..."
        },{
            id: 2,
            name: "Aaron, LAPD Captain",
            quote: "Stephanie was amazing! Lots of great feedback from the class participants and an excellent workout experience. Go Yoga!"
        },{
            id: 3,
            name: "Sophia, VidaCher",
            quote: "Stephanie was amazing. She gave me a specific yoga pose that really helped my sciatic nerve... I was able to actually straighten out and walk normally after doing this pose. Can't recommend (Prana Wellness) enough!"
        },{
            id: 4,
            name: "Sarah Jo, Campus Manager of Cross Campus DTLA",
            quote: "Prana Wellness meditation and yoga classes have added so much value to our work space. Our office members express their gratitude regularly... Cross Campus loves you!"
        },{
            id: 5,
            name: "Ceilidh jeans, Ballantines PR",
            quote: "It was so needed! I can’t explain the shift in attitude from before to after in the whole team. It was such a GIFT!"
        }]

    }

    scrollTest = () => {
        // window.scrollBy(100, 0);
        // const element = document.getElementById('reviews');
        // element.scrollLeft += 100;

        const elementsss = document.getElementById('reviews');
        elementsss.scrollLeft += 20;



        console.log("click three", elementsss);
      }


    render(){

        const { reviews } = this.state
            const ReviewList = reviews.map((review, key) => {
                return (
                    <Review key={key} id={review.id}>
                        {review.name}
                        <br/>
                        {review.quote}
                    </Review>
                )
            })

        return(<>
            <Container id='reviews'>
{ReviewList}
            </Container>
    <button onClick={this.scrollTest}>Button</button>

            </>

            
        );
    };
};

const Container = styled.div`
width: 145px;
height: 100px;
border: 1px solid #ccc;
overflow-x: scroll;
`;

const Review = styled.div`
width: 250px;
background-color: #ccc;
display: inline-block;
// width: 80vw;
// max-width: 400px;
// margin: 0 auto;
`;