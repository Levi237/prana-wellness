import React from 'react';
import styled from 'styled-components';


const HomeHeader = ({toggleContactBtn}) => {
  
  return(
    <>
      <VideoContainer className="video-container">
        <VideoFrame
          playsInline
          autoPlay
          muted
          loop
          id="bgvid"
          ref={video => {
              if (!video) return;
              video.muted = true;
              video.play();
          }}
        >
        <source
            src="https://player.vimeo.com/external/432921265.hd.mp4?s=8aebeb5818eac88d46085763ac93b372951e79f4&profile_id=175"
            type="video/mp4"
        />
        </VideoFrame>
      </VideoContainer>

      <WelcomeContainer>
        <WelcomeTo>WELCOME TO</WelcomeTo>
        <Prana>PRANA</Prana>
        <Wellness>wellness</Wellness>
        <Statement>Wellness designed to work for you.</Statement>
        <ButtonWrapper>
          <ButtonCTA 
            name="contactForm" 
            className="ctaBtn mobile-fill" 
            onClick={(e) => {toggleContactBtn(e)}}
          >
            Bring Prana to You
          </ButtonCTA>
        </ButtonWrapper>
      </WelcomeContainer>
      
    </>)
    ;
};

const VideoContainer = styled.div`
width: 100vw;
height: calc(100vh);
overflow: hidden;
position: absolute;
top: 0px;

  @media (max-aspect-ratio: 16/9) and (max-width: 945px) {

  }
`;

const VideoFrame = styled.video`
  position: absolute;
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-aspect-ratio: 16/9) and (max-width: 945px) {
      width: auto;
      height: 100%;
  }
  @media (min-aspect-ratio: 16/9) {
      width: 100vw;
      height: 56.25vw;
    }
  }
`;

const WelcomeContainer = styled.div`
  color: #FFF;
  text-align: center;
  position: absolute;
  top: 46px;
  height: 100%;
  width: 100vw;
  z-index: 1;
  background-image: linear-gradient(180deg, black, transparent, transparent 80%);
  overflow: hidden;
  @media screen and (max-width: 945px) {
      margin-top: -20vw;
      padding-top: 20vw;
      top: 0;
    }
@media screen and (max-width: 945px) {

}
    `;

const WelcomeTo = styled.section`
  font-size: 2.5vw;
  font-weight: bold;
  letter-spacing: .5vw;

  text-transform: uppercase;
  color: #A0CD4D;

  margin-top: 60px;
  margin-bottom: calc(7vh - 2.5vw - 60px);
@media screen and (max-width: 945px) {
  font-size: 5vw;
  margin-top: calc(40px + 10vw);
}
  `;
const Prana = styled.section`
  font-size: 10vw;
  font-weight: 100;
  letter-spacing: 2.5vw;
  margin-top: 20px;

@media screen and (max-width: 945px) {
  font-size: 14vw;
  letter-spacing: 5vw;
}
  `;
const Wellness = styled.section`
  font-family: 'Merriweather',sans-serif;
  font-size: 5vw;

  margin-top: calc(2vh - 5vw);
@media screen and (max-width: 945px) {
  font-size: 10vw;
}
  `;
const Statement = styled.section`
font-weight: 100;
font-size: 2vw;

position: absolute;
bottom: calc(3vh + 12.33vw + 40px);
text-shadow: 4px 4px 10px #000;

margin: 0 auto;
width: 100vw;

@media screen and (max-width: 945px) {
  font-size: 5vw;
  bottom: 20vh;
}
`;

const ButtonWrapper = styled.section`
position: absolute;
bottom: calc(2vh + 7.33vw + 40px);
margin: 0 auto;
text-align: center;
width: 100vw;

@media screen and (max-width: 945px) {
  bottom: 12vh;
}
`;
const ButtonCTA = styled.button`
  font-size: 1.33vw;
  margin: 0 auto;
  color: #FFF;
  background-color: #A0CD4D !important;
  border-color: #669F35;
  transition: all .3s ease-in-out;

  :hover {
    background-color: #669F35 !important;
    transition: all .3s ease-in-out;
  }
@media screen and (max-width: 945px) {
  font-size: 3vw!important;
  padding: 1vh auto;
  bottom: off;
}
  `;

export default HomeHeader;