import React, { Component } from 'react';

import './ReferralRequest.css'

import firebase from 'firebase/app'
import { relative } from 'path';

const containerStyle = {
    position: 'fixed',
    'z-index': '50',
    width: '100vw',
    height: '100vh',
    background: 'rgba(255, 255, 255, .5)',
    overflow: 'hidden',
}

const formDivStyle = {
    position: 'relative',
    background: 'white',
    width: '94vw',
    height: '94vh',
    padding: '3vh 3vw',
    'max-width': 'calc(600px - 6vw)',
    'max-height': '800px',
    margin: '0 auto',
    'text-align': 'center',
}

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
        e.preventDefault();
        const newFromDB = await firebase.firestore()
            .collection('referrals')
            .add({
                ...this.state,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            }).then(this.props.toggleReferralBtn);
        return newFromDB
    };
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        })
    }
    
    render(){
        const { fromName, fromEmail, toName, toEmail, businessName, subjectTitle, subjectContent } = this.state
        return(
            <div id="referral" style={containerStyle} className="inactive">
            <form className="feedback-form" onSubmit={(e) => {this.handleSubmit(e)}}>
            <div style={formDivStyle} className="referral-box">
                <section>FROM:</section>
                    <input
                        className="emailer-input"
                        name="fromName"
                        type="text" 
                        onChange={e => {this.handleChange(e)}}
                        placeholder="Enter your name here"
                        // required
                        value={fromName}
                    />
                    <input
                        className="emailer-input"
                        name="fromEmail"
                        type="email" 
                        onChange={this.handleChange}
                        placeholder="Enter your email here"
                        // required
                        value={fromEmail}
                    />
                <section>TO:</section>
                    <input
                        className="emailer-input"
                        name="toName"
                        type="text" 
                        onChange={this.handleChange}
                        placeholder="Enter referral name here"
                        // required
                        value={toName}
                    />
                    <input
                        className="emailer-input"
                        name="toEmail"
                        type="email" 
                        onChange={this.handleChange}
                        placeholder="Enter referral email here"
                        // required
                        value={toEmail}
                    />
                    <input
                        className="emailer-input"
                        name="businessName"
                        type="text" 
                        onChange={this.handleChange}
                        placeholder="Enter company name here"
                        // required
                        value={businessName}
                    />
                <section>SUBJECT:</section>
                    <input
                        className="emailer-input"
                        name="subjectTitle"
                        type="text" 
                        onChange={this.handleChange}
                        placeholder="Enter subject here"
                        // required
                        value={subjectTitle}
                    />
                    <textarea
                        className="emailer-input"
                        name="subjectContent"
                        type="text" 
                        onChange={this.handleChange}
                        placeholder="Share your thoughts"
                        required
                        value={subjectContent}
                    />
                    <button type="submit">SUBMIT</button>
                </div>

            </form>
            </div>
        )
    }
}