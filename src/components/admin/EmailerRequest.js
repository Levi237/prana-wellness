import React, { Component } from 'react';

import './EmailerRequest.css';

import firebase from 'firebase/app';

// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

// const msg = {
// to: 'test@example.com',
// from: 'test@example.com',
// subject: 'Sending with Twilio SendGrid is Fun',
// templateId: 'd-baaba9ce96fc4bf89d1b1ea917f6994c',
// text: 'and easy to do anywhere, even with Node.js',
// html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };


const inputStyle = {
    display: 'inline-block',
    float: 'right',
    width: '75%',
    marginLeft: '5%',
    maxWidth: '550px',
    height: '48px',
    fontSize: '24px',
    lineHeight: '29px',
    color: 'rgba(0, 0, 0, 0.5)',
};

const btnStyle = {
    padding: '0',
    background: 'transparent',
    border: '1px solid #fff',
    color: 'white',
    width: '36px',
    // minWidth: '10%',
    height: '54px',
    display: 'inline-block',
    float: 'right',
    marginLeft: '5px',
};

const arrowStyle = {
    borderRight: '1px solid #FFFFFF',
    borderTop: '1px solid #FFFFFF',
    boxSizing: 'border-box',
    transform: 'rotate(45deg)',
    height: '16px',
    width: '16px',
    marginLeft: '5px',
};

export default class EmailerRequest extends Component {
    state = {
        email: null,
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const newFromDB = await firebase.firestore()
            .collection('emailers')
            .add({
                email: this.state.email,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            }).then(
                this.setState({
                    email: "Thank You"
                })
            )
        return newFromDB; 
    };

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            email: e.currentTarget.value
        });
    };

    render(){
        const { email } = this.state


        return(
            <>
            <form className="feedback-form" onSubmit={(e) => {this.handleSubmit(e)}}>
                <button type="submit" style={btnStyle}><div style={arrowStyle}></div></button>
                <input
                    className="emailer-input"
                    name="email"
                    type="email" 
                    onChange={this.handleChange}
                    placeholder="Enter your email here"
                    required
                    value={ email ? email : ""}
                    style={inputStyle}
                />
            </form>
            </>
        );
    };
};