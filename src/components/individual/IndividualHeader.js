import React from 'react';

 const IndividualHeader = () => {
    return(<>
    <div className="header-container">
        <img className="header-image" src="wellness-header.png" alt="wellness-header"/>
        <div className="header-content-container">
            <section className="top-header-text pranaText">REDISCOVER</section>
            <section className="bottom-header-text">Personal Wellness</section>
        </div>
    </div>
        <div className="../wellness-header-purple"></div>
    </>);
};

export default IndividualHeader;