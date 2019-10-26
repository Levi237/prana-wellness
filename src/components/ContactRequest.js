import React, { Component } from 'react';

import './RequestForm.css';
// import './ContactRequest.css'

import firebase from 'firebase/app'



export default class ReferralRequest extends Component {
    state = {
        fromName: null,
        fromEmail: null,
        businessName: null,
        subjectTitle: null,
        subjectContent: null,
        addServices: [],
    };

    handleSubmit = async (e) => {
        const { toggleContactBtn } = this.props
        e.preventDefault();
        const newFromDB = await firebase.firestore()
            .collection('requests')
            .add({
                ...this.state,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            }).then(toggleContactBtn);
        return newFromDB;
    };
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        });
    };
    handleSelect = (e, value) => {
        const { addServices } = this.state
        const selectedService = e.currentTarget.name
        e.preventDefault();

        if (addServices.includes(selectedService)){
            e.currentTarget.classList.remove('selectedHighlighted');
            this.setState(prevState => ({     
                addServices: addServices.filter(x => (
                    x !== selectedService
                ))
            }));
        } else {
            e.currentTarget.classList.add('selectedHighlighted')
            this.setState({
                addServices: [...addServices, selectedService]
            });
        };
    };

    
    render(){
        const { fromName, fromEmail, businessName, subjectTitle, subjectContent, addServices } = this.state
        const { toggleContactBtn, services } = this.props  

        const buttonSelectors = services.map((service, key) => {
            return(
                <button 
                    key={key} 
                    id={service.largeText}
                    name={service.largeText}
                    value={service}
                    className="select-service"
                    onClick={(e) => {this.handleSelect(e, service)}
                }>
                    <section>{service.smallText}</section>
                    <section>{service.largeText}</section>
                </button>
            );
        });

        return(
            <div id="contact" className="inactive contact-container">
                    <button name="contactForm" className="close xClose" onClick={(e) => {toggleContactBtn(e)}}>
                         CLOSE X
                    </button>
            <form className="feedback-form" onSubmit={(e) => {this.handleSubmit(e)}}>
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
                <section>Ask about additional services:</section>
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