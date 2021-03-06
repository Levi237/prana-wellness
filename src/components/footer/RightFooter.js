import React from 'react';
import styled from 'styled-components';
const RightFooter = () => {
    return(
        <>
            <br/>
            <Logo className="travel-slay-logo">
                <a href="https://www.travelslay.co/" target="_blank" rel="noopener noreferrer"><img src="../travel_slay_white.png" alt="Travel Slay"/></a>
                <section>explore fitness and travel</section>
            </Logo>
        </>
    );
};

const Logo = styled.div`
    img {
        position: relative;
        width: 180px
    }
    section {
        text-transform: uppercase;
        color: #FFF;
        font-size: 10px;
        text-align: center; 
        position: relative;
    }

  @media screen and (max-width: 945px) {
    margin: 0 auto;
    text-align: center;

    img {
        width: auto;
        height: 80px;
        margin-bottom: -20px;
    }
    section {
        width: 100vw;
        text-align: center;
        font-size: 12px;
    }
}
`;

export default RightFooter;