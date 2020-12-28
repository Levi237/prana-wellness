import React, { Component } from 'react';
import styled               from 'styled-components';

export default class EmailConfirmation extends Component {
    state = {}
    render(){
        const { toggleEmailConfirmation } = this.props
        // setTimeout(function(){history.back();}, 3000);
        return (<>
            <Container id="confirmation" className="active contact-container">
                <CloseBtn name="emailForm" className="close xClose white" onClick={(e) => {toggleEmailConfirmation(e)}}>X</CloseBtn>
                Thank you for your Email Submission.  Plesae check your inbox for your confirmaton email soon.
            </Container>
        </>);
    };
};
const Container = styled.div`
    position: fixed;
    overflow: scroll;
    z-index: 99999;
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