import React from 'react';
import styled from 'styled-components';

 const HeaderComponent = ({title, subtitle, image, purpleBox}) => {
    return(<>
    <Container className="header-container">
        <Image className="header-image" src={image} alt="wellness-header"/>
        <Content className="header-content-container">
            <section className="top-header-text pranaText">{title}</section>
            <section className="bottom-header-text">{subtitle}</section>
        </Content>
    </Container>
        {purpleBox && <PurpleBox className="wellness-header-purple"></PurpleBox>}
    </>);
};
const PurpleBox = styled.div`
position: relative;
    z-index: 0;
    margin-top: -15vw;
    height: 30vw;
    background-color: #bf9ec8;
`;
const Container = styled.div`
color: white;
padding-top: 120px;
background-color: transparent;

@media screen and (max-width: 945px) {
      height: 44vw;
      text-align: center;
      overflow: hidden;
    }
`;
const Image = styled.img`
width: 80vw;
margin: 0 10vw;
position: relative;
z-index: 1;

@media screen and (max-width: 945px) {
width: 100vw;
margin: 0;
z-index: 1;
height: auto;
position: relative;
}
`;

const Content = styled.div`
position: absolute;
z-index: 11;
text-align: center;
width: 80vw;
margin: -20vw 10vw;

@media screen and (max-width: 945px) {
    width: 100vw;
    margin: -25vw 0;
    section:first-of-type {
        font-size: 5vw;
      }
      section:last-of-type {
        font-size: 9vw;
      }
}
`;


export default HeaderComponent;