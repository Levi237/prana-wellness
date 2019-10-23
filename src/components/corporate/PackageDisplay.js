// import React, { Component } from 'react';

// import './PackageDisplay.css'

// export default class PackageDisplay extends Component {
//     state = {
//         individualPlans: [{ 
//             title: "Asana",
//             price: "$10/month",
//             duration: ["1 x per month", "(6 month commitment)"],
//             details: ["Can be a mix of yoga, meditation, and/or breath work", "*See add ons for additional services"],
//             image: "namaste.png",
//         },{
//             title: "Satiya",
//             price: "$20/month",
//             duration: ["1 x per week", "(3 month commitment)"],
//             details: ["Access to online meditations", "1 lunch and learn ", "*See add ons for additional services"],
//             image: "karma.png",
//         },{
//             title: "Ahimsa",
//             price: "$50/month",
//             duration: ["12 week", "intensive program"],
//             details: ['“Wellness for the Working Mind”', "Combination of lunch and learns, speakers, wellness classes, and team building exercises Access to various online wellness resources- yoga, stretching, breath work, meditation", "*Customizable, pricing may vary*"],
//             image: "guru.png",
//         }]
//     }
//     render(){
//         const { corporatePlans, individualPlans } = this.state;
//         const { pricePack } =
//         const corporateTarget = document.getElementById('');
//         const individualTarget = document.getElementById('')

//         const showPackage = pricePack.map((pack, key) => {
//             const details = pack.details.map((detail, k) => {
//                 return <section key={k}>{detail}</section>
//             })
//             return(
//                 <div key={key} className="pack-container">
//                     <img className="packBackgroundImage" src={`${pack.image}`} alt="pack-box" />
//                     <div className="price-pack-box">
//                         <section>{pack.title}</section>
//                         <section>{pack.price}</section>
//                         <section>{pack.duration[0]}</section>
//                         <section>{pack.duration[1]}</section>
//                         {details}
//                     </div>
//                         <button>BUY NOW</button>
//                 </div>
//             )
//         })
//         return(<>{showPackage}</>)
//     }
// }

import React from 'react';

import './PackageDisplay.css'

const PackageDisplay =({pricePack})=> {

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
                    <section>{pack.secondTitle}</section>
                    {details}
                </div>
                    <button>BUY NOW</button>
            </div>
        )
    })
    return(<>{showPackage}</>)
}
export default PackageDisplay 