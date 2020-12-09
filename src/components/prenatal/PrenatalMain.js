import React from 'react';
import styled from 'styled-components';

const PrenatalMain = () => {
    return(
      <Container>
        <div>
        <h1 className="main-title">
        PUT A TITLE HERE
        </h1>
        <section className="main-cta">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </section>
        </div>
        <Circle>
          <div></div>
          <section></section>
          <section></section>
        </Circle>
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
  > div {
    background-color: white;
    position: relative;
    z-index: 9999999999999;
  }
    @media screen and (max-width: 945px) {
      margin-top: calc(32.3vw - 100vh + 58px);
      padding-top: 5vw;
    }
`;
const Circle = styled.section`
  position: relative;
  height: 75vw;
  > div {
    background-color: #965BA5;
    width: 50vw;
    height: 50vw;
    border-radius: 100%;
    margin: -20vw 25vw;
    position: absolute;
    opacity: .5;
  }
  > section {
    display: inline-block;
    width: 50vw;
    height: 50vw;
    margin-top: 7vw;
  }
  > section:last-of-type {
    background-color: purple;
  }
`;
export default PrenatalMain;