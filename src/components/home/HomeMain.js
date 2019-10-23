import React from 'react';
import { NavLink } from 'react-router-dom';

import * as routes from '../../constants/routes';

import PointDisplay   from './PointDisplay';
import LotusDisplay   from './LotusDisplay';
import HomeStephanie  from './HomeStephanie';
import Carousel       from '../Carousel';

 const HomeMain = () => {
    return(<>
        <div className="home-main-top"><br />
        “Prana is Sanskrit for breath, considered as a life-giving force. <br/>
        Prana is seen as a universal energy, which flows in currents in and around the body.”
        </div>
        <section className="home-main-header">WELLNESS SERVICES</section>
        <PointDisplay />
        <br /><br /><br/>
        <NavLink to={routes.CORP}><button>browse services</button></NavLink>
        <br /><br /><br/>
        <LotusDisplay />
        <HomeStephanie />
        <Carousel />
    </>)
 
}

export default HomeMain