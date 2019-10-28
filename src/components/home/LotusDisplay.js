import React, { Component } from 'react';
import { NavLink }          from 'react-router-dom';

import './LotusDisplay.css'

import * as routes          from '../../constants/routes';


const lotusStyleOverride = {
    // position: 'relative',
    // overflow: 'hidden',
    // maxHeight: '957px'
}

export default class LotusDisplay extends Component {
    state = {

    };
    render(){

            return(<>
                <div className="lotus-box" style={lotusStyleOverride}>
                    <div></div>
                    <div>
                       <section>WANT TO SEE WELLNESS IN YOUR WORKPLACE?</section>
                       <section>with various options for incorporating Prana Wellness into your work and personal life, we can help you curate a healthy work environment that works for you.</section>
                    </div>

                    <section>
                        <img src="../lotus_half_pink.png" alt="lotus_half_pink" />
                        <div>Corporate Wellness</div>
                        <section>
                        Let us help you create an engaging and enjoyable wellness program to increase productivity, retention, and employee satisfaction. 
                        </section>
                        <NavLink to={routes.CORP}><button className="white lotus-desktop-button">explore workplace plans</button></NavLink>
                        <NavLink to={routes.CORP}><button className="white lotus-mobile-button">explore plans</button></NavLink>
                    </section>

                    <section>
                        <img src="../lotus_half_white.png" alt="lotus_half_white" />
                        <div>Individual Wellness</div>
                        <section>
                        We guide you and educate you, and help you identify ways to incorporate wellness practices in all areas of your life.
                        </section>
                        <NavLink to={routes.WELL}><button className="purple lotus-desktop-button">explore individual plans</button></NavLink>
                        <NavLink to={routes.WELL}><button className="purple lotus-mobile-button">explore plans</button></NavLink>
                    </section>

                </div>
                </>
            );
    };
};