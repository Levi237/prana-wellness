import React, { Component } from 'react';

import './CustomerDisplay.css'

export default class CustomerDisplay extends Component {
    state = {
        clients: [{
            name: 'customer',
            logo: './customer-logo/bpr-logo-landscape-highres.png',
            link: "https://www.levieiko.com"
        },{
            name: 'customer',
            logo: './customer-logo/centric-logo.png',
            link: "https://www.levieiko.com"
        },{
            name: 'customer',
            logo: './customer-logo/cross-campus-high-res-logo-stacked.png',
            link: "https://www.levieiko.com"
        },{
            name: 'customer',
            logo: './customer-logo/DocuSign_logo.png',
            link: "https://www.levieiko.com"
        },{
            name: 'customer',
            logo: './customer-logo/KAPOW.png',
            link: "https://www.levieiko.com"
        },{
            name: 'customer',
            logo: './customer-logo/LA-South-Chamber.png',
            link: "https://www.levieiko.com"
        },{
            name: 'customer',
            logo: './customer-logo/salisian-lee-logo.png',
            link: "https://www.levieiko.com"
        }]
    };
    render(){
        const { clients } = this.state;

        const customerList = clients.map((client, key) => {
            return(
                <section key={key}>
                    <a href={client.link} target="_blank" rel="noopener noreferrer">
                        <img src={client.logo} alt={client.name}/>
                    </a>
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