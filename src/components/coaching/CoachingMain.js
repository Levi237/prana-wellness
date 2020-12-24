import React from 'react';
import styled from 'styled-components';

import Speaking from './Speaking';
import Coaching from './Coaching';

const CoachingMain = ({toggleEmailSignup, headerContent}) => {
    return(
      <Container>
        <h1 className="main-title">
        {headerContent.header}}
        </h1>
        <section className="main-cta">
        {headerContent.message}}
        </section>
        <button value="contactRequest" onClick={(e) => {toggleEmailSignup(e)}}>}{headerContent.button}</button>
        <br/><br/><br/><br/>
      <Speaking/>
      {this.props.children}
      <Coaching/>
    </Container>);
};

const Container = styled.div`
  margin-bottom: 5vw;
  margin-top: calc(25.86vw - 100vh + 196px);
  position: relative;
  z-index: 1;
  padding-bottom: 8vw;

    @media screen and (max-width: 945px) {
      margin-top: calc(32.3vw - 100vh + 58px);
      padding-top: 5vw;
    }
`;
export default CoachingMain;