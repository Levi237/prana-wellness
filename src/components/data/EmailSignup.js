import React, { Component } from 'react';

import EmailApp from './EmailComponent';
// "https://travelslay.us12.list-manage.com/subscribe/post?u=0e3bf36f8cbe7c4f0019bd050&amp;id=fe06177933"


// import firebase from 'firebase/app';

export default class EmailSignup extends Component {
    
    
    render(){

        const { toggleEmailSignup } = this.props
        return(
            <div id="email" className="inactive contact-container">
                <button name="emailForm" className="close xClose white" onClick={(e) => {toggleEmailSignup(e)}}>
                        CLOSE X
                </button>

                <EmailApp/>

            </div>
        );
    };
};
