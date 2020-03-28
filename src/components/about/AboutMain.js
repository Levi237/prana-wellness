import React from 'react';
import styled from 'styled-components';

import MeetStephanie  from './MeetStephanie';
import TeamMembers  from './TeamMembers';

const AboutMain = () => {
    return(<Container>
            <h1 className="main-title">a holistic approach to wellness</h1>
            <section className="main-cta">
              We make wellness work for you. We educate and guide you into a happier, healthier workplace. Rooted in India, at the source, our team brings experienced wellness professionals with varying backgrounds in the corporate space. Tailored programs are developed to increase employee productivity and retention, and decrease overall healthcare costs overtime. 
            </section>
            <MeetStephanie />
            <TeamMembers />
            {/* <section className="main-title-two">Meet the Team</section> */}
    </Container>);
};

const Container = styled.div`

margin-bottom: 5vw;
margin-top: calc(34vw - 90vh);
position: relative;
z-index: 1;
padding-bottom: 8vw;
// background: rgb(191, 158, 200);
button {
    margin-left: 2vw;
    margin-right: 2vw;
  }
  @media screen and (max-width: 945px) {
    // margin-top: -6vw;
    // padding-bottom: 8vw;
    // margin-top: -10vw;
    padding-top: 5vw;
  }
`;

export default AboutMain;