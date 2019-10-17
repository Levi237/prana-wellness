import React, { Component } from 'react';

import './PackageDisplay.css'

export default class PackageDisplay extends Component {
    state = {
        pricePack: [{ 
            title: "Namaste",
            price: "$300/session",
            duration: ["1 x per month", "(6 month commitment)"],
            details: ["Can be a mix of yoga, meditation, and/or breath work", "*See add ons for additional services"],
            image: "Namaste.png",
        },{
            title: "Karma",
            price: "$200",
            duration: ["1 x per week", "(3 month commitment)"],
            details: ["Access to online meditations", "1 lunch and learn ", "*See add ons for additional services"],
            image: "Karma.png",
        },{
            title: "Guru",
            price: "$4500",
            duration: ["12 week", "intensive program"],
            details: ['“Wellness for the Working Mind”', "Combination of lunch and learns, speakers, wellness classes, and team building exercises Access to various online wellness resources- yoga, stretching, breath work, meditation", "*Customizable, pricing may vary*"],
            image: "Guru.png",
        }]
    }
    render(){
        const { pricePack } = this.state
        const showPackage = pricePack.map((pack, key) => {
            const details = pack.details.map((detail, k) => {
                return <section key={k}>{detail}</section>
            })
            return(
                <div key={key} className="pack-container">
                    <img className="packBackgroundImage" src={`${pack.image}`} alt="pack-box" />
                    <div className="price-pack-box">
                        <section>{pack.title}</section>
                        <section>{pack.price}</section>
                        <section>{pack.duration[0]}</section>
                        <section>{pack.duration[1]}</section>
                        {details}
                    </div>
                        <button>BUY NOW</button>
                </div>
            )
        })
        return(<>{showPackage}</>)
    }
}