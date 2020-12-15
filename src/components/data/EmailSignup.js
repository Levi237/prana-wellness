import React, { Component } from 'react';
import styled from 'styled-components';

import EmailComponent from './EmailComponent';
// "https://travelslay.us12.list-manage.com/subscribe/post?u=0e3bf36f8cbe7c4f0019bd050&amp;id=fe06177933"

export default class EmailSignup extends Component { 
    
    render(){

        const { toggleEmailSignup, contactType } = this.props
        return(
            <Container id="email" className="inactive contact-container">
                <button name="emailForm" className="close xClose white" onClick={(e) => {toggleEmailSignup(e)}}>X</button>
                {(contactType === "freebie") 
                &&
                    <p>
                        No matter your schedule, or location, experience wellness{" "}
                        for the working mind with our signature virtual packages{" "}
                        including yoga, meditation, and breathwork.
                        <br/><br/>
                        Sign up now for a free guided meditation.
                    </p>
                }
                {(contactType === "contact") 
                &&
<></>
                }

                <EmailComponent/>

            </Container>

            
        );
    };
};

const Container = styled.div`
    height: 100vh;
    width: 100vw;

    text-align: right;

    background-color: #fff;

    position: absolute;
    z-index: 91;

    > button {
        background-color: transparent;
        border-radius: 100px;
        margin: 10px;
        font-size: 14px;
        max-height: 30px;
        max-width: 30px;
        min-height: 30px;
        min-width: 30px;
        padding: 0;
        text-align: center;
        position: relative;
        z-index: 99999;
    }
    p {
        text-align: center;
        padding: 2% 20%;

    }
    form {
        text-align: center;
    }
    form input {
        height: 40px;
        width: 300px;
        display: block;
        margin: 10px auto;
        font-size: 18px;
        padding: 4px 15px;
    }
    form p {
        position: absolute;
        top: 0;
        width: 100vw;
        padding: 2% 0;
    }
    form button {
        background-color: white;
        color: purple;
        border: purple solid 1px;
        font-size: 18px;
        position: relative;
        z-index: 900;
    }
`;