import React from 'react';
import styled from 'styled-components';

import './LogoDisplay.css';

const CustomerDisplay = ({ logos, clients }) => {

    const carouselId = document.getElementById("scroll");
    const carouselStart  = () => carouselId && carouselId.classList.add("carousel");
    const carouselTimerOff = () => carouselId && carouselId.classList.remove("carousel");
    const carouselTimerOn = () => carouselId && carouselId.classList.add("carousel");
    carouselId && setTimeout(carouselStart, 1000);
    carouselId && setInterval(carouselTimerOff, 50000);
    carouselId && setInterval(carouselTimerOn, 100000);

    const logoList = logos.map((logo, key) => {
        return(
            <Logo key={key}>
            {logo.link 
            ?   <a href={logo.link} target="_blank" rel="noopener noreferrer">
                    <Image src={`./customer-logo/${logo.name}`} alt={logo.name}/>
                </a>
            : <Image src={`./customer-logo/${logo.name}`} alt={logo.name}/>
            }
            </Logo>
        );
    });

    return(
        <ScrollMenu id={(logos === clients) ? "scroll" : ""} className="scrollmenu">
            <LogoList>{logoList}</LogoList>
        </ScrollMenu>
    );
};

const ScrollMenu = styled.div`
    background-color: rgba(150, 91, 165, 0.2);;
    overflow: auto;
    white-space: nowrap;
    transition: all .3s ease-in-out;

      &:hover {
        background-color: rgba(150, 91, 165, 0.3);
        transition: all 5s ease-in-out;
      }
  `;
const LogoList = styled.div`
    transition: all 80s ease-in-out;
`;

const Logo = styled.section`
    height: 60px;
    display: inline-block;
    vertical-align: top;
    padding: 14px;
    margin: 10px;
    position: relative;
    `;
const Image = styled.img`
    height: 60px;
`;
export default CustomerDisplay