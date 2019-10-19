import React, { Component } from 'react';

import './BenefitsDisplay.css'

export default class BenefitsDisplay extends Component {

    render(){
        return(
            <div className="benefits-box">
                {/* <section>benefits of wellness in the workplace</section> */}
                <img width="100%" src="benefits.png" alt="benefits"/>
            </div>
        )
    }
}