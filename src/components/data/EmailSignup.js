import React, { Component } from 'react';



// import './EmailSignup.css';

// import firebase from 'firebase/app';

export default class EmailSignup extends Component {
    
    
    render(){

        const { toggleEmailSignup } = this.props
        return(
            <div id="email" className="inactive contact-container">
                    <button name="emailForm" className="close xClose white" onClick={(e) => {toggleEmailSignup(e)}}>
                         CLOSE X
                    </button>

Hello World

            </div>
        );
    };
};
