import React, { Component } from 'react';


const divStyle = {
    width: '100vw',
    margin: '-10vw 0 0 0'
};



export default class BenefitsDisplay extends Component {

    render(){
        return(
            <div className="benefits-box" style={divStyle}>
                <img width="100%" src="benefits.png" alt="benefits"/>
            </div>
        )
    }
}