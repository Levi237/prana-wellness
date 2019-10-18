import React, { Component } from 'react';

import './PointDisplay.css'

export default class PointDisplay extends Component {
    state = {

    }
    render(){

            return(
                <div className="lotus-box">

                    <div>
                       <section></section>
                       <section></section>
                    </div>

                    <section>
                        <img className="pointBackgroundImage" src="lotus-half-pink.png" alt="point-box" />
                        <div></div>
                        <section></section>
                        <button></button>
                    </section>

                    <section>
                        <img className="pointBackgroundImage" src="lotus-half-white.png" alt="point-box" />
                        <div></div>
                        <section></section>
                        <button></button>
                    </section>

                </div>
            )


    }
}