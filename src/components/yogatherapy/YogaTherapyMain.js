import React from 'react';
import styled from 'styled-components';

import WhyYogaTherapy  from './WhyYogaTherapy';

const YogaTherapyMain = () => {
    return(
      <Container>
        <h1 className="main-title">
        WHAT IS YOGA THERAPY?
        </h1>
        <section className="main-cta">
          Yoga Therapy blends Eastern and Western medicine in a wholistic practice of healing the whole person. Yoga meets Integrative Medicine. Yoga Therapy is the adaptation of yoga practices for people with specific health challenges, chronic pain, anxiety, depression, and illness. Yoga Therapists are trained to work alongside medical doctors, chiropractors, physical therapists, and physiatrists.
        </section>
        <WhyYogaTherapy />
        {/* <TeamMembers /> */}
        <VideoBox src="https://player.vimeo.com/video/387594093"></VideoBox>
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

export default YogaTherapyMain;