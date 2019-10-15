import React, { Component } from 'react';

import './PackageDisplay.css'

export default class PackageDisplay extends Component {
    state = {
        pricePack: [{ 
            title: "Corporate",
            price: "$10/MONTH",
            content: "blah blah blah blah blah",
            image: "point-placeholder.png",
        },{
            title: "Invigorating",
            price: "$20/MONTH",
            content: "blah blah blah blah blah",
            image: "point-placeholder.png",
        },{
            title: "Mindful",
            price: "$50/MONTH",
            content: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
            image: "point-placeholder.png",
        }]
    }
    render(){
        const { pricePack } = this.state
        const showPackage = pricePack.map((pack, key) => {
            return(
                <div key={key} className="pack-container">
                    <img className="packBackgroundImage" src={`${pack.image}`} alt="pack-box" />
                    <div className="price-pack-box">
                        <section>{pack.title}</section>
                        <section>{pack.price}</section>
                        <section>{pack.content}</section>
                    </div>
                        <button>BUY NOW</button>
                </div>
            )
        })
        return(<>{showPackage}</>)
    }
}