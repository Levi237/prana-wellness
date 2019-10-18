import React from 'react';

import PointDisplay   from './PointDisplay';

 const HomeMain = () => {
    return(<>
        <div className="home-main-top"><br />
        “Prana is Sanskrit for breath, considered as a life-giving force. <br/>
        Prana is seen as a universal energy, which flows in currents in and around the body.”
        </div>
        <section className="home-main-header">WELLNESS SERVICES</section>
        <PointDisplay />
        <br /><br /><br/>
        <button>browse services</button>
        <br /><br /><br/>
    </>)
 
}

export default HomeMain