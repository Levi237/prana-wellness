import React from 'react';
import styled from 'styled-components';

import MeetStephanie  from './MeetStephanie';
import TeamMembers  from './TeamMembers';

const AboutMain = () => {
    return(
      <Container>
        <h1 className="main-title">
          a holistic approach to wellness
        </h1>
        <section className="main-cta">
          We make wellness work for you. We educate and guide you into a happier, healthier workplace. Rooted in India, at the source, our team brings experienced wellness professionals with varying backgrounds in the corporate space. Tailored programs are developed to increase employee productivity and retention, and decrease overall healthcare costs overtime. 
        </section>
        <VideoBox src="https://player.vimeo.com/video/387594093"></VideoBox>
        <MeetStephanie />
        <TeamMembers />
      </Container>);
};

const Container = styled.div`
  margin-bottom: 5vw;
  margin-top: calc(25.86vw - 100vh + 196px);
  position: relative;
  z-index: 1;
  padding-bottom: 8vw;

  button {
      margin-left: 2vw;
      margin-right: 2vw;
    }
    @media screen and (max-width: 945px) {
      margin-top: calc(32.3vw - 100vh + 58px);
      padding-top: 5vw;
    }
`;

const VideoBox = styled.embed`
    width: 80vw;
    height: 33vw;
    max-width: 800px;
    max-height: 330px;
    margin: 0 auto 40px;
    @media screen and (max-width: 945px) {
      width: 100vw;
      height: 60vw;
    }
`;

export default AboutMain;