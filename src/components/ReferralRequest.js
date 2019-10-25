import React, { Component } from 'react';

import './ReferralRequest.css';

import firebase from 'firebase/app';

const containerStyle = {
    position: 'fixed',
    zIndex: '50',
    width: '100vw',
    height: '100vh',
    padding: '3vw, 0',
    background: 'rgba(255, 255, 255, .5)',
    overflow: 'hidden',
};

const formDivStyle = {
    position: 'relative',
    background: 'white',
    boxShadow: '0px 0px 20px rgba(0,0,0,.5)',
    width: '94vw',
    height: '94vh',
    padding: '3vh 3vw',
    maxWidth: 'calc(600px - 6vw)',
    height: '80vh',
    margin: '0 auto 40px auto',
    textAlign: 'center',
    overflow: 'auto',
};


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
            <div id="referral" style={containerStyle} className="inactive">
                    <button name="referralForm" className="close xClose" onClick={(e) => {toggleReferralBtn(e)}}>
                         CLOSE X
                    </button>
            <form name="referralForm" className="feedback-form" onSubmit={(e) => {this.handleSubmit(e)}}>
            <div style={formDivStyle} className="referral-box">
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