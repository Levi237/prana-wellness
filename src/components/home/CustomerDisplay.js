import React, { Component } from 'react';

import './CustomerDisplay.css'

export default class CustomerDisplay extends Component {
    state = {
        clients: [{
            name: 'customer',
            logo: 'namaste.png',
            link: "https://www.levieiko.com"
        },{
            name: 'customer',
            logo: 'namaste.png',
            link: "https://www.levieiko.com"
        },{
            name: 'customer',
            logo: 'namaste.png',
            link: "https://www.levieiko.com"
        },{
            name: 'customer',

            logo: 'namaste.png',
            link: "https://www.levieiko.com"
        },{
            name: 'customer',
            logo: 'namaste.png',
            link: "https://www.levieiko.com"
        },{
            name: 'customer',
            logo: 'namaste.png',
            link: "https://www.levieiko.com"
        },{
            name: 'customer',

            logo: 'namaste.png',
            link: "https://www.levieiko.com"
        }]
    };
    render(){
        const { clients } = this.state;

        const customerList = clients.map((client, key) => {
            return(
                <section key={key}><a href={client.link} target="_blank" rel="noopener noreferrer"><img src={client.logo} alt={client.name}/><br/><span>{client.name}</span></a></section>
            )
        });

        return(
            <div className="scrollmenu">
                {customerList}
            </div>
        );
    };
};