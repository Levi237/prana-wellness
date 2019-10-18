import React, { Component } from 'react';

import './LotusDisplay.css'

export default class PointDisplay extends Component {
    state = {

    }
    render(){

            return(
                <div className="lotus-box">
                    <div></div>
                    <div>
                       <section>WANT TO SEE WELLNESS IN YOUR WORKPLACE?</section>
                       <section>With two unique options for incorporating Prana Wellness into your daily routine, we can help you achieve a more healthy and mindful lifestyle.</section>
                    </div>

                    <section>
                        <img className="" src="lotus_half_pink.png" alt="lotus_half_pink" />
                        <div>Corporate Wellness</div>
                        <section>
                            can help your company implement an engaging wellness program for all employees to enjoy.
                        </section>
                        <button className="lotus-desktop-button">explore workplace plans</button>
                        <button className="lotus-mobile-button">explore plans</button>
                    </section>

                    <section>
                        <img className="" src="lotus_half_white.png" alt="lotus_half_white" />
                        <div>Individual Wellness</div>
                        <section>
                            can help you identify ways to incorporate the practice outside of work and into all areas of your life.
                        </section>
                        <button className="lotus-desktop-button">explore individual plans</button>
                        <button className="lotus-mobile-button">explore plans</button>
                    </section>

                </div>
            )


    }
}