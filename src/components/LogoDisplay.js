import React from 'react';

import './LogoDisplay.css';

const CustomerDisplay = ({ logos, clients }) => {

    const carouselId = document.getElementById("scroll");
    const carouselStart  = () => carouselId && carouselId.classList.add("carousel");
    const carouselTimerOff = () => carouselId && carouselId.classList.remove("carousel");
    const carouselTimerOn = () => carouselId && carouselId.classList.add("carousel");
    const timerStart = carouselId && setTimeout(carouselStart, 1000);
    const timerOff = carouselId && setInterval(carouselTimerOff, 50000);
    const timerOn = carouselId && setInterval(carouselTimerOn, 100000);

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