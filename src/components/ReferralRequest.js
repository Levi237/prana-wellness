import React, { Component } from 'react';

import './RequestForm.css';

import firebase from 'firebase/app';


export default class ReferralRequest extends Component {
    state = {
        fromName: null,
        fromEmail: null,
        toName: null,
        toEmail: null,
        businessName: null,
        subjectTitle: null,
        subjectContent: null,
    };

    handleSubmit = async (e) => {
        const { toggleReferralBtn } = this.props
        e.preventDefault();
        const newFromDB = await firebase.firestore()
            .collection('referrals')
            .add({
                ...this.state,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            }).then((e) => {toggleReferralBtn(e)});
        return newFromDB
    };
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        })
    };
    
    render(){
        const { fromName, fromEmail, toName, toEmail, businessName, subjectTitle, subjectContent } = this.state
        const { toggleReferralBtn } = this.props
        return(
            <div id="referral" className="inactive contact-container">
                    <button name="referralForm" className="close xClose" onClick={(e) => {toggleReferralBtn(e)}}>
                         CLOSE X
                    </button>
            <form name="referralForm" className="feedback-form" onSubmit={(e) => {this.handleSubmit(e)}}>
            <div className="form-container contact-box">
                <section>FROM:</section>
                    <input
                        className="emailer-input"
                        name="fromName"
                        type="text" 
                        onChange={e => {this.handleChange(e)}}
                        placeholder="Enter your name here"
                        required
                        value={ fromName ? fromName : ''}
                    />
                    <input
                        className="emailer-input"
                        name="fromEmail"
                        type="email" 
                        onChange={this.handleChange}
                        placeholder="Enter your email here"
                        required
                        value={ fromEmail ? fromEmail : ''}
                    />
                <section>TO:</section>
                    <input
                        className="emailer-input"
                        name="toName"
                        type="text" 
                        onChange={this.handleChange}
                        placeholder="Enter referral name here"
                        required
                        value={ toName ? toName : ''}
                    />
                    <input
                        className="emailer-input"
                        name="toEmail"
                        type="email" 
                        onChange={this.handleChange}
                        placeholder="Enter referral email here"
                        required
                        value={ toEmail ? toEmail : ''}
                    />
                    <input
                        className="emailer-input"
                        name="businessName"
                        type="text" 
                        onChange={this.handleChange}
                        placeholder="Enter company name here"
                        required
                        value={ businessName ? businessName : ''}
                    />
                <section>SUBJECT:</section>
                    <input
                        className="emailer-input"
                        name="subjectTitle"
                        type="text" 
                        onChange={this.handleChange}
                        placeholder="Enter subject here"
                        required
                        value={ subjectTitle ? subjectTitle : ''}
                    />
                    <textarea
                        className="emailer-input"
                        name="subjectContent"
                        type="text" 
                        onChange={this.handleChange}
                        placeholder="Share your thoughts"
                        required
                        value={ subjectContent ? subjectContent : ''}
                    />
                    <button type="submit">SUBMIT</button>
                </div>

            </form>
            </div>
        );
    };
};