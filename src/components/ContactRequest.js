import React, { Component } from 'react';

import './ReferralRequest.css'

import firebase from 'firebase/app'
// import { relative } from 'path';

const containerStyle = {
    position: 'fixed',
    zIndex: '50',
    width: '100vw',
    height: '100vh',
    padding: '3vw, 0',
    background: 'rgba(255, 255, 255, .5)',
    overflow: 'hidden',
}

const formDivStyle = {
    position: 'relative',
    background: 'white',
    boxShadow: '0px 0px 20px rgba(0,0,0,.5)',
    width: '94vw',
    height: '94vh',
    padding: '3vh 3vw',
    maxWidth: 'calc(600px - 6vw)',
    maxHeight: '800px',
    margin: '0 auto',
    textAlign: 'center',
    overflow: 'auto',
}

const selectStyle = {
    width: '150px',
    fontSize: '20px',
    padding: '5px 15px',
    margin: '5px',

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
        addServices: [],
    };

    handleSubmit = async (e) => {
        const { toggleContactBtn } = this.props
        e.preventDefault();
        const newFromDB = await firebase.firestore()
            .collection('referrals')
            .add({
                ...this.state,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            }).then(toggleContactBtn)
        return newFromDB;
    };
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.currentTarget.name]: !e.currentTarget.value,
        })
    };
    handleSelect = (e, value) => {
        const { addServices } = this.state
        const selectedService = e.currentTarget.name
        e.preventDefault();
        if (addServices.includes(selectedService)){
            this.setState(prevState => ({     
                addServices: addServices.filter(x => (
                    x !== selectedService
                ))
            }));
        } else {
            this.setState({
                addServices: [...addServices, selectedService]
            });
        }
    };
    
    render(){
        const { fromName, fromEmail, toName, toEmail, businessName, subjectTitle, subjectContent } = this.state
        const { toggleContactBtn, services } = this.props


        const buttonSelectors = services.map((service, key) => {
            return(
                <button 
                    key={key} 
                    id={service.largeText}
                    name={service.largeText}
                    value={service}
                    style={selectStyle} 
                    onClick={(e) => {this.handleSelect(e, service)}
                }>
                    <section>{service.smallText}</section>
                    <section>{service.largeText}</section>
                </button>
            )
        });

        return(
            <div id="contact" style={containerStyle} className="inactive">
                    <button name="contactForm" className="close xClose" onClick={(e) => {toggleContactBtn(e)}}>
                         CLOSE X
                    </button>
            <form className="feedback-form" onSubmit={(e) => {this.handleSubmit(e)}}>
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
                        // value={fromEmail}
                        value={ fromEmail ? fromEmail : ''}
                    />
                <section>Business or Location:</section>
                    <input
                        className="emailer-input"
                        name="businessName"
                        type="text" 
                        onChange={this.handleChange}
                        placeholder="Enter company name here"
                        required
                        // value={businessName}
                        value={ businessName ? businessName : ''}
                    />
                    {buttonSelectors}
                <section>SUBJECT:</section>
                    <input
                        className="emailer-input"
                        name="subjectTitle"
                        type="text" 
                        onChange={this.handleChange}
                        placeholder="Enter subject here"
                        required
                        // value={subjectTitle}
                        value={ subjectTitle ? subjectTitle : ''}
                    />
                    <textarea
                        className="emailer-input"
                        name="subjectContent"
                        type="text" 
                        onChange={this.handleChange}
                        placeholder="Share your thoughts"
                        required
                        // value={subjectContent}
                        value={ subjectContent ? subjectContent : ''}
                    />
                    <button type="submit">SUBMIT</button>
                </div>

            </form>
            </div>
        );
    };
};