import React from 'react';

 const CorporateHeader = () => {
    return(<>
        <div className="header-container">
            <img className="header-image" src="../corporate-header.png" alt="corporate-header"/>
            <div className="header-content-container">
                <section className="top-header-text pranaText">CONSIDER</section>
                <section className="bottom-header-text">Corporate Wellness</section>
            </div>
        </div>
    </>);
};

export default CorporateHeader;