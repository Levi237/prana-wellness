import React from 'react';

import './ServiceDisplay.css'

const ServiceDisplay = ({services}) => {

        const showServices = services.map((service, key) => {
            return(
                <div key={key} className="service-box">
                    <div className="card-front">
                        <div>
                            <section>{service.smallText}</section><section>{service.largeText}</section>
                        </div>
                        <img className="serviceBackgroundImage" src={`${service.image}`} alt="service-box" />
                    </div>
                    <div className="card-back">
                        <section>{service.content}</section>
                    </div>
                </div>
            )
        })
        return(<>{showServices}</>)
    }
export default ServiceDisplay 