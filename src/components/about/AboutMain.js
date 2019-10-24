import React from 'react';

import MeetStephanie  from './MeetStephanie';
import StephanieBio  from './StephanieBio';

const AboutMain = () => {
    return(<>
            <section className="main-title">a holistic approach to wellness</section>
            <section className="main-cta">
              We make wellness work for you. We educate and guide you into a happier, healthier workplace. Rooted in India, at the source, our team brings experienced wellness professionals with varying backgrounds in the corporate space. Tailored programs are developed to increase employee productivity and retention, and decrease overall healthcare costs overtime. 
            </section>
            <MeetStephanie />
            <StephanieBio />
            <section className="main-title-two">Meet the Team</section>
    </>)
}

export default AboutMain