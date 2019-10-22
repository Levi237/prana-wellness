import React from 'react';

// import ServiceDisplay from './ServiceDisplay';


// const featureDivStyle = {
//         height: '30px',
//         position: 'relative',
//         'z-index': '0',
//         'margin-top': '-150px',
//         height: 'calc(15vw + 200px)',
//         'text-align': 'center',
//         'background-color': 'rgb(191, 158, 200)',
//         'padding-top': '200px',
//         overflow: 'auto !important',
// }
 const ServicesHeader = () => {
    return(<>
        <div className="header-container">
            <img className="header-image" src="service-header.png" alt="wellness-header"/>
            <div className="header-content-container">
                <section className="top-header-text pranaText">explore our wide-ranging</section>
                <section className="bottom-header-text">Wellness Services</section>
            </div>
        </div>
        <div className="wellness-header-purple">
            {/* <ServiceDisplay /> */}
        </div>
    </>)
}

export default ServicesHeader