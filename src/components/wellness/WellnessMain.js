import React from 'react';


const WellnessMain = ({toggleReferralBtn}) => {
    return(<>
          <div className="wellness-main-container">
            <section className="main-title">Want Prana in Your Workplace?</section>
            <section className="main-cta">If you’d love to see a wellness program in your workplace, refer Prana Wellness to your company or HR manager and get a promo code to unlock premium content! </section>
            <button onClick={toggleReferralBtn}>refer to employer</button>
          </div>
    </>)
}

export default WellnessMain