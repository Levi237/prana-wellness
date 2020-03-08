import React from 'react';
import styled from 'styled-components';


const HomeHeader = ({toggleContactBtn}) => {
  
  return(
    <>
      <div className="video-container">
        <video
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
            src="https://player.vimeo.com/external/395830932.hd.mp4?s=d355e4cba477d5307c66b116a78ba687d56f5b7e&profile_id=174"
            type="video/mp4"
        />
        </video>
      </div>

      <div className="home-header">
        <WelcomeTo className="welcomeText">WELCOME TO</WelcomeTo>
        <Prana className="pranaText">PRANA</Prana>
        <Wellness className="wellnessText">wellness</Wellness>
        <Statement className="statementText">Wellness designed to work for you.</Statement>
        <ButtonCTA name="contactForm" className="ctaBtn mobile-fill" onClick={(e) => {toggleContactBtn(e)}}>Bring Prana to Your Workplace</ButtonCTA>
      </div>
      
    </>)
    ;
};

const WelcomeTo = styled.section`
  font-size: 2.5vw;
  font-weight: bold;
  letter-spacing: .5vw;

  text-transform: uppercase;
  color: #A0CD4D;

  margin-top: 60px;
  margin-bottom: calc(18vh - 2.5vw - 60px);
`;
const Prana = styled.section`
  font-size: 10vw;
  font-weight: 100;
  letter-spacing: 2.5vw;

  margin-top: calc(8vh - 10vw);
`;
const Wellness = styled.section`
  font-family: 'Merriweather',sans-serif;
  font-size: 5vw;
  
  margin-top: calc(2vh - 5vw);
`;
const Statement = styled.section`
  font-weight: 100;
  font-size: 2vw;
  text-shadow: 2px 2px 10px #000;

  margin-top: calc(44vh - 4vw);
`;
const ButtonCTA = styled.button`
  font-size: 1.33vw;

  color: #FFF;
  background-color: #A0CD4D !important;
  border-color: #669F35;
  transition: all .3s ease-in-out;

  margin-top: calc(2vh - 1.33vw);

  :hover {
    background-color: #669F35 !important;
    transition: all .3s ease-in-out;
  }
`;

export default HomeHeader;