import React, { Component } from 'react';

import './CustomerDisplay.css'

export default class CustomerDisplay extends Component {
    state = {
        clients: [{
            name: 'Bob',
            logo: 'namaste.png',
            link: 'www.levieiko.com'
        },{
            name: 'Bob2',
            logo: 'namaste.png',
            link: 'www.levieiko.com'
        },{
            name: 'Bob3',
            logo: 'namaste.png',
            link: 'www.levieiko.com'
        },{
            name: 'Bob24',
            logo: 'namaste.png',
            link: 'www.levieiko.com'
        },{
            name: 'Bob2',
            logo: 'namaste.png',
            link: 'www.levieiko.com'
        },{
            name: 'Bob3',
            logo: 'namaste.png',
            link: 'www.levieiko.com'
        },{
            name: 'Bob24',
            logo: 'namaste.png',
            link: 'www.levieiko.com'
        }]
    }
    render(){
        const { clients } = this.state;

        const customerList = clients.map((client, key) => {
            return(
                <section key={key}><a href="https://www.levieiko.com" target="_blank"><img src={client.logo} /><br/><span>{client.name}</span></a></section>
            )
        })
        return(
            <div className="scrollmenu">
                {customerList}

            </div>
        )
    }
}