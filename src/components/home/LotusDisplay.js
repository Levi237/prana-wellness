import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './LotusDisplay.css'
// import { removeTypeDuplicates } from '@babel/types';

import * as routes      from '../../constants/routes';

export default class PointDisplay extends Component {
    state = {

    }
    render(){

            return(
                <div className="lotus-box">
                    <div></div>
                    <div>
                       <section>WANT TO SEE WELLNESS IN YOUR WORKPLACE?</section>
                       <section>with various options for incorporating Prana Wellness into your work and personal life, we can help you curate a healthy work environment that works for you.</section>
                    </div>

                    <section>
                        <img className="" src="lotus_half_pink.png" alt="lotus_half_pink" />
                        <div>Corporate Wellness</div>
                        <section>
                            can help your company implement an engaging wellness program for all employees to enjoy.
                        </section>
                        <NavLink to={routes.CORP}><button className="lotus-desktop-button">explore workplace plans</button></NavLink>
                        <NavLink to={routes.CORP}><button className="lotus-mobile-button">explore plans</button></NavLink>
                    </section>

                    <section>
                        <img className="" src="lotus_half_white.png" alt="lotus_half_white" />
                        <div>Individual Wellness</div>
                        <section>
                            can help you identify ways to incorporate the practice outside of work and into all areas of your life.
                        </section>
                        <NavLink to={routes.WELL}><button className="lotus-desktop-button">explore individual plans</button></NavLink>
                        <NavLink to={routes.WELL}><button className="lotus-mobile-button">explore plans</button></NavLink>
                    </section>

                </div>
            )


    }
}