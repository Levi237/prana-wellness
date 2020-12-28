import React, { Component } from 'react';
import styled               from 'styled-components';

export default class EmailConfirmation extends Component {
    state = {}
    render(){
        const { toggleEmailConfirmation } = this.props
        return (<>
            <Container id="confirmation" className="active contact-container">
                <CloseBtn name="emailForm" className="close xClose white" onClick={(e) => {toggleEmailConfirmation(e)}}>X</CloseBtn>
                <div>
                    <div>
                        <section>
                            Namaste!
                            <br/>
                            <p>
                                Thank you for your Email Submission.  Please check your inbox for your confirmaton email soon.
                            </p>
                        </section>
                    </div>
                </div>
            </Container>
        </>);
    };
};
const Container = styled.div`
    position: fixed;
    overflow: scroll;
    z-index: 99999;

    display: flex;
    align-items: center;
    justify-content: center;

    >div {
        display: inline-block;
        min-height: 400px;
        min-width: 400px;
        max-height: 400px;
        max-width: 400px;
        background-image: url(floral-background.png);

        > div {
            height: 298px;
            width: 298px;
            margin: 50px;
            border: 1px solid #965BA5;
            background-color: rgba(255,255,255,1);
            text-align: center;

            display: flex;
            align-items: center;
            justify-content: center;

            section {
                font-family: Merriweather;
                text-transform: capitalize;
                font-size: 40px;
                color: #965BA5;
                width: 100%;
                padding-top: 5%;
                p {
                    display: inline-block;
                    padding: 5%;
                    font-family: Montserrat;
                    font-size: 14px;
                    color: black;
                }
            }

        }
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