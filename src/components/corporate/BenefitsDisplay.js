import React from 'react';


const divStyle = {
    width: '100vw',
    margin: '-10vw 0 0 0'
};


const BenefitsDisplay = () => {
        return(
            <div className="benefits-box" style={divStyle}>
                <img width="100%" src="benefits.png" alt="benefits"/>
            </div>
        )
};
export default BenefitsDisplay;