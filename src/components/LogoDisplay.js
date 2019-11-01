import React, { Component } from 'react';

import './LogoDisplay.css'

export default class CustomerDisplay extends Component {
    state = {
        // logos: [
        //     'bpr-logo-landscape-highres.png',
        //     'centric-logo.png',
        //     'cross-campus-high-res-logo-stacked.png',
        //     'DocuSign_logo.png',
        //     'KAPOW.png',
        //     'LA-South-Chamber.png',
        //     'salisian-lee-logo.png',
        // ]
    };
    render(){
        const { logos } = this.props;

        const logoList = logos.map((logo, key) => {
            return(
                <section key={key}>
                    {/* <a href={logo.link} target="_blank" rel="noopener noreferrer"> */}
                        <img src={`./customer-logo/${logo}`} alt={logo}/>
                    {/* </a> */}
                </section>
            )
        });

        return(
            <div className="scrollmenu">
                {logoList}
            </div>
        );
    };
};