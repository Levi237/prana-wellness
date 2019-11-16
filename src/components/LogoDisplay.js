import React from 'react';

import './LogoDisplay.css';

const CustomerDisplay = ({ logos, clients }) => {

    const carouselStart  = () => document.getElementById("scroll").classList.add("carousel");
    const carouselTimerOff = () => document.getElementById("scroll").classList.remove("carousel");
    const carouselTimerOn = () => document.getElementById("scroll").classList.add("carousel");
    const timerStart = setTimeout(carouselStart, 1000);
    const timerOff = setInterval(carouselTimerOff, 60000);
    const timerOn = setInterval(carouselTimerOn, 120000);

    const logoList = logos.map((logo, key) => {
        return(
            <section key={key}>
            {logo.link 
            ?   <a href={logo.link} target="_blank" rel="noopener noreferrer">
                    <img src={`./customer-logo/${logo.name}`} alt={logo.name}/>
                </a>
            : <img src={`./customer-logo/${logo.name}`} alt={logo.name}/>
            }
            </section>
        );
    });

    return(
        <div id={(logos === clients) ? "scroll" : ""} className="scrollmenu">
            <div>{logoList}</div>
        </div>
    );
};

export default CustomerDisplay