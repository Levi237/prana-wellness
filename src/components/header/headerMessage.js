import React, { Component } from 'react';
import styled from 'styled-components';

import PurpleContent from '../PurpleContent';

export default class HeaderMessage extends Component {
  render(){
    const {toggleEmailSignup, headerContent} = this.props
    return(<>
      { (headerContent.backgroundColor === "purple")? <>
        <PurpleContainer className="wellness-main-content purple-content">
          <h1>{headerContent.header}</h1>
          <section>
              <div>
                  {headerContent.message}  
              </div>
              <div>
                  <button className="purple mobile-fill" value={headerContent.value} onClick={(e) => {toggleEmailSignup(e)}}>{headerContent.button}</button>
              </div>

          </section>
        </PurpleContainer>
        {this.props.children}
      </> : <>
        <Container>
          <h1 className="main-title">
          {headerContent.header}
          </h1>
          <section className="main-cta">
          {headerContent.message}
          </section>
          <button value={headerContent.value} onClick={(e) => {toggleEmailSignup(e)}}>{headerContent.button}</button>
          <br/><br/><br/><br/>
          {this.props.children}
        </Container>
      </>}
    </>);
  }
};
const PurpleContainer = styled.div`
  margin-bottom: 5vw;
  margin-top: calc(25.86vw - 100vh + 196px);
  position: relative;
  z-index: 1;
  padding-bottom: 8vw;
  background: rgb(191, 158, 200);
  > h1 {
    font-weight: normal;
    color: #FFFFFF;
    @media screen and (max-width: 945px){
            padding: 2.5vw;
        }
      }
    section {
    >  div:first-of-type {
    display: inline-block;
    vertical-align: top;
    width: 50vw;
    font-size: 1.5vw;
    margin-left: 10vw;
    margin-right: 2.5vw;
    float: left;
    color: #fff;
    text-align: left;
    @media screen and (max-width: 945px){
        display: block;
        width: 80vw;
        font-size: 3vw;
        margin-left: 10vw;
        margin-right: 2.5vw;
        margin-bottom: 4vw;
        float: none;
        text-align: justify;
    }
  }
  > div:last-of-type {
    display: inline-block;
    vertical-align: top;
    width: 27.5vw;
    margin-right: 10vw;
    float: right;
    text-align: center;
    @media screen and (max-width: 945px){
        display: block;
        float: none;
        width: 100%;
    }
  }
}
  button {
    margin-left: 2vw;
    margin-right: 2vw;
  }
    @media screen and (max-width: 945px) {
      margin-top: calc(32.3vw - 100vh + 58px);
      padding-top: 5vw;
    }
`;
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