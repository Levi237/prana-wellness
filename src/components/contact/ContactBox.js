import React from 'react';
import styled from 'styled-components';

const ContactBox = ({user}) => {
    return(
        <Contact>
            <a href="https://www.instagram.com/pranawellness_life/" target="_blank" rel="noopener noreferrer" alt="instagram link pranawellness.life">
                <img src="../instagram-icon.png" alt="IG"/>
            </a>
            {user 
                ? <section>Welcome Stephanie!</section>
                : <section>info@pranawellness.life</section> 
            }
        </Contact>
    );
};

const Contact = styled.div`
    position: relative;
    width: 380px;
    margin-left: calc(90vw - 380px);

    a img {
        height: 22px;
        width: 22px;
        position: absolute;
        left: 0;
        top: 12px;
    }
    section {
        position: absolute;
        right: 0;
        top: 12px;
        width: 278px;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    @media screen and (max-width: 945px){
          position: relative;
          width: 300px;
          margin: 2vw auto;
    a img {
          height: 22px;
          width: 22px;
          position: absolute;
          top: 0;
        }
    section {
        position: absolute;
        top: 2px;
        width: auto;
        font-size: 16px;
    }
`;

export default ContactBox;