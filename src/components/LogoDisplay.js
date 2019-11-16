import React from 'react';

import './LogoDisplay.css';

const CustomerDisplay = ({ logos, clients }) => {

    const timerStart  = () => document.getElementById("scroll").classList.add("carousel");
    const timerOff = () => document.getElementById("scroll").classList.remove("carousel");
    const timerOn = () => document.getElementById("scroll").classList.add("carousel");
    const carouselStart = setTimeout(timerStart, 1000);
    const carouselTimerOff = setInterval(timerOff, 60000);
    const carouselTimerOn = setInterval(timerOn, 120000);

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