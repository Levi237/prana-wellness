import React from 'react';

import './ServiceDisplay.css';

const ServiceDisplay = ({services, transformStyle}) => {

    const showServices = services.map((service, key) => {
        const backgroundImageStyle = {
            'background-image': `url(${service.image})`
        }
        return(
            <div key={key} className="service-box" style={transformStyle}>
                <div className={service.content ? "card-box card-hover" : "card-box"} style={backgroundImageStyle}>
                    <div className="card-front">
                        <div className={service.content ? "card-front-data card-hover" : "card-front-data pop-hover"}>
                            <section>{service.smallText}</section>
                            <section>{service.largeText}</section>
                        </div>
                    </div>
                
                </div>
                <div className="card-back">
                    <section>{service.content}</section>
                </div>
            </div>
        )
    });
    return(<>{showServices}</>);
};
export default ServiceDisplay;