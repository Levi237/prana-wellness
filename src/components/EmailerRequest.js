import React, { Component } from 'react';

import firebase from 'firebase/app';
// import admin from 'firebase/admin';
// import sgMail from '@sendgrid/mail';

// const functions = require('firebase-functions');
// import * as admin from 'firebase-admin';

// const admin = require('firebase-admin')
// admin.initializeApp(functions.config().firebase);
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);




// const firestoreEmail = functions.firestore
// .document('Users/{userId}/Followers/{followerId}')
// .onCreate(event => {

//     const userId = "for now exact id";

//     const db = admin.firestore()

//     return db.collection('Users').doc(userId)
//             .get()
//             .then(doc => {
//                 const user = doc.data()

//                 const msg = {
//                     to: "someEmailAddress@gmail.com",
//                     from: 'hello@someEmailAddress.com',
//                     subject: 'New Follower',
//                 };

//                 return sgMail.send(msg)
//             })
//             .then( () => console.log('email sent!') )
//             .catch( (err) => console.log(err) )
// }) 



const msg = {
to: 'test@example.com',
from: 'test@example.com',
subject: 'Sending with Twilio SendGrid is Fun',
templateId: 'd-baaba9ce96fc4bf89d1b1ea917f6994c',
text: 'and easy to do anywhere, even with Node.js',
html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
// sgMail.send(msg);

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

// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);
// const msg = {
//     to: 'test@example.com',
//     from: 'test@example.com',
//     subject: 'Sending with Twilio SendGrid is Fun',
//     templateId: 'd-baaba9ce96fc4bf89d1b1ea917f6994c',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//     };

export default class EmailerRequest extends Component {
    state = {
        email: null,
    };


    handleSubmit = async (e) => {
        e.preventDefault();
        sgMail.send(msg);
        const newFromDB = await firebase.firestore()
            .collection('emailers')
            .add({
                email: this.state.email,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
        return newFromDB
        
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
                    {/* <button type="submit"><div></div></button> */}
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