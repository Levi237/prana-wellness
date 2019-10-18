import React from 'react';

import BenefitsDisplay from './BenefitsDisplay'
import PackageDisplay from './PackageDisplay';

const CorporateMain = () => {
    return(<>
          <div className="about-main-container">
            <div className="main-title">
                <BenefitsDisplay />
            </div>
            <PackageDisplay />
          </div>
    </>)
}

export default CorporateMain