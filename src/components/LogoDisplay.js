import React from 'react';

import './LogoDisplay.css';

const CustomerDisplay = ({ logos }) => {

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
        <div className="scrollmenu">
            <div>{logoList}</div>
        </div>
    );
};

export default CustomerDisplay