import React from 'react';
import styled from 'styled-components';

import WhyYogaTherapy  from './WhyYogaTherapy';
import TwoColumnFeature  from './TwoColumnFeature';

const YogaTherapyMain = ({toggleEmailSignup}) => {
    return(
      <Container>
        <h1 className="main-title">
        WHAT IS YOGA THERAPY?
        </h1>
        <section className="main-cta">
          Yoga Therapy blends Eastern and Western medicine in a wholistic practice of healing the whole person. Yoga meets Integrative Medicine. Yoga Therapy is the adaptation of yoga practices for people with specific health challenges, chronic pain, anxiety, depression, and illness. Yoga Therapists are trained to work alongside medical doctors, chiropractors, physical therapists, and physiatrists.
        </section>
        <button value="contactRequest" onClick={(e) => {toggleEmailSignup(e)}}>BRING PRANA TO YOU</button>
        <br/><br/><br/><br/>
        <WhyYogaTherapy />
        <TwoColumnFeature />
        <VideoBox src="https://player.vimeo.com/video/488789376"></VideoBox>
        {/* https://vimeo.com/488789376/28e4ee5b48 */}
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
    max-width: 1600px;
    max-height: 660px;
    margin: 100px auto 0;
    @media screen and (max-width: 945px) {
      width: 100vw;
      height: 60vw;
      margin: 5vw auto 0;
    }
`;

export default YogaTherapyMain;