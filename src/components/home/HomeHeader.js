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
            src="https://fitplan-marketing.s3-us-west-2.amazonaws.com/psd/tester.mov"
            // src="https://player.vimeo.com/external/395830932.hd.mp4?s=d355e4cba477d5307c66b116a78ba687d56f5b7e&profile_id=174"
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
            Bring Prana to Your Workplace
          </ButtonCTA>
        </ButtonWrapper>
      </WelcomeContainer>
      
    </>)
    ;
};

const VideoContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 46px);
  overflow: hidden;

  position: absolute;

  @media (max-aspect-ratio: 16/9) and (max-width: 945px) {
    position: absolute;
    top: 0;
    overflow: hidden;

    height: 50vh;
  }
`;

const VideoFrame = styled.video`
  position: absolute;
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-aspect-ratio: 16/9) and (max-width: 945px) {
      height: 100%;
      width: auto;
  }
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
  height: 100%;
  width: 100vw;
  z-index: 1;
  background-image: linear-gradient(180deg, black, transparent, transparent 80%);
  overflow: hidden;
  @media screen and (max-width: 945px) {
      margin-top: -20vw;
      // height: 90vw;
      padding-top: 20vw;
      position: absolute;
      width: 100vw;
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
  margin: 3vw;
}
  `;
const Prana = styled.section`
  font-size: 10vw;
  font-weight: 100;
  letter-spacing: 2.5vw;

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
bottom: calc(3vh + 11.33vw + 40px);
text-shadow: 2px 2px 10px #000;

margin: 0 auto;
width: 100vw;

@media screen and (max-width: 945px) {
  font-weight: 100;
  font-size: 3.5vw;
  bottom: calc(3vh + 40px);

}
`;

const ButtonWrapper = styled.section`
position: absolute;
bottom: calc(2vh + 7.33vw + 40px);
margin: 0 auto;
text-align: center;
width: 100vw;

@media screen and (max-width: 945px) {
  top: 40vh;
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