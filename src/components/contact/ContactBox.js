import React from 'react';
import styled from 'styled-components';

const ContactBox = ({user,toggleEmailSignup}) => {
    return(
        <Contact>
            <span>Experience Virtual Wellness Packages{"  "}</span><button onClick={(e) => {toggleEmailSignup(e)}}>Free Meditation</button>
            {/* <a href="https://www.instagram.com/pranawellness_life/" target="_blank" rel="noopener noreferrer" alt="instagram link pranawellness.life">
                <img src="../instagram-icon.png" alt="IG"/>
            </a> */}
            {user 
                ? <section>Welcome Stephanie!</section>
                // : <section>info@pranawellness.life</section> 
                : <></>
            }
        </Contact>
    );
};

const Contact = styled.div`
    position: relative;
    width: 100vw;
    text-align: center;
    color: white;
    button {
        height: 30px;
        font-size: 14px;
        line-height: 18px;
        padding: 6px 12px!important;
        margin-top: 8px;
        color: #fff;
        position: relative;
        z-index: 90;

        &:hover {
            background-color: rgba(255,255,255,.5);
        }
    }

    @media screen and (max-width: 945px){
        button {
            margin-top: 5px;
        }
        span {
            display: none;
        }
    }
`;

export default ContactBox;