import React, { Component } from 'react';

import './CustomerDisplay.css'

export default class CustomerDisplay extends Component {
    state = {
        clients: [
            'bpr-logo-landscape-highres.png',
            'centric-logo.png',
            'cross-campus-high-res-logo-stacked.png',
            'DocuSign_logo.png',
            'KAPOW.png',
            'LA-South-Chamber.png',
            'salisian-lee-logo.png',
        ]
    };
    render(){
        const { clients } = this.state;

        const customerList = clients.map((client, key) => {
            return(
                <section key={key}>
                    {/* <a href={client.link} target="_blank" rel="noopener noreferrer"> */}
                        <img src={`./customer-logo/${client}`} alt={client}/>
                    {/* </a> */}
                </section>
            )
        });

        return(
            <div className="scrollmenu">
                {customerList}
            </div>
        );
    };
};