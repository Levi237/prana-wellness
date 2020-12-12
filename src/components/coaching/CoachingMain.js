import React from 'react';
import styled from 'styled-components';

import Speaking from './Speaking';

const CoachingMain = () => {
    return(
      <Container>
        <h1 className="main-title">
        SPEAKING TO INSPIRE
        </h1>
        <section className="main-cta">
        Book Stephanie, “Motivator in Chief,” to motivate, inspire, and provide valuable tools to educate your team at work, youth group, newbie entrepreneurs, or wellness providers.
        </section>
      <Speaking/>
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
export default CoachingMain;