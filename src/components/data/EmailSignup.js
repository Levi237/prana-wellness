import React, { Component } from 'react';
import styled               from 'styled-components';

import EmailComponent       from './EmailComponent';
import ContactComponent     from './ContactComponent';
import MailChimp            from './MailChimp';
// import ContactRequest from '../admin/ContactRequest';

export default class EmailSignup extends Component { 
    
    render(){

        const { toggleEmailSignup, contactType } = this.props
        return(
            <Container id="email" className="inactive contact-container">
                <CloseBtn name="emailForm" className="close xClose white" onClick={(e) => {toggleEmailSignup(e)}}>X</CloseBtn>
                { (contactType === "freebie") && 
                    <>
                        <p>
                            No matter your schedule, or location, experience wellness{" "}
                            for the working mind with our signature virtual packages{" "}
                            including yoga, meditation, and breathwork.
                            <br/><br/>
                            Sign up now for a free guided meditation.
                        </p>
                        <EmailComponent/>
                    </> }
                { (contactType === "contact") && <ContactComponent/> }
                { (contactType === "mailchimp") && <MailChimp/> }

                

            </Container>

            
        );
    };
};

const Container = styled.div`
// position: relative;
overflow: scroll;
z-index: 99999;   
    > button {
        // background-color: transparent;
        // border-radius: 100px;
        // margin: 10px;
        // font-size: 14px;
        // max-height: 30px;
        // max-width: 30px;
        // min-height: 30px;
        // min-width: 30px;
        // padding: 0;
        // text-align: center;

    }
    p {
        text-align: center;
        background-color: white;
    }
    
    form {
        text-align: center;
        max-width: 700px;
        margin: 20px auto 0;
        background-color: white;
        padding: 20px 0;
    }
    form input {
        height: 36px;
        margin: 5px auto;
        font-size: 18px;
        border-width: 1px;
        border-radius: 2px;
    }
    form button {
        background-color: white;
        color: purple;
        border: purple solid 1px;
        font-size: 16px;
        position: relative;
        z-index: 900;
    }
`;

const CloseBtn = styled.button`
    background-color: transparent;
    border-radius: 100px;

    font-size: 14px;
    max-height: 30px;
    max-width: 30px;
    min-height: 30px;
    min-width: 30px;

    padding: 0;
    text-align: center;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 99999;
`;