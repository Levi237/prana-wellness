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