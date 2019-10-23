import React from 'react';



import './ServiceDisplay.css'

const ServiceDisplay = ({services}) => {

        const showServices = services.map((service, key) => {
            const backgroundImageStyle = {
                'background-image': `url(${service.image})`
            }
            return(
                <div key={key} className="service-box">
                    <div className="card-box" style={backgroundImageStyle}>
                        <div className="card-front">
                            <div>
                                {/* <img className="serviceBackgroundImage" src={`${service.image}`} alt="service-box" /> */}
                            <section>{service.smallText}</section><section>{service.largeText}</section>
                                </div>
                        </div>
                        

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