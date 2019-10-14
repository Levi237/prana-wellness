import React, { Component } from 'react';

import './PackageDisplay.css'

export default class PackageDisplay extends Component {
    state = {
        pricePack: [{ 
            title: "Corporate",
            price: "Wellness",
            content: "blah blah blah blah blah",
            image: "point-placeholder.png",
        },{
            title: "Invigorating",
            price: "Yoga",
            content: "blah blah blah blah blah",
            image: "point-placeholder.png",
        },{
            title: "relaxing",
            price: "Meditation",
            content: "blah blah blah blah blah",
            image: "point-placeholder.png",
        },{
            title: "Mindful",
            price: "Breathing",
            content: "blah blah blah blah blah",
            image: "point-placeholder.png",
        }]
    }
    render(){
        const { pricePack } = this.state
        console.log(pricePack);
        const showPackage = pricePack.map((pack, key) => {
            return(
                <div key={key} className="pack-box">
                    <div><img className="packBackgroundImage" src={`${pack.image}`} alt="pack-box" /></div>
                    <div>
                        <section>{pack.title}</section><section>{pack.price}</section><section>{pack.content}</section>
                    </div>
                    <button>BUY NOW</button>
                </div>
            )
        })
        return(<>{showPackage}</>)
    }
}