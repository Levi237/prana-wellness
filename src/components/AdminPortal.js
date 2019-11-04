import React, { Component } from 'react';

import firebase from 'firebase/app';
// import 'firebase/database';

export default class AdminPortal extends Component {
    state = {
        contacts: [],
        emailers: [],
    }
    componentDidMount = () => {
        this.loadContactRequests();
        this.loadEmailerRequests();
      };
    
      loadContactRequests(){
        firebase
        .firestore()
        .collection('requests')
        .orderBy('timestamp', 'desc')
        .onSnapshot(serverUpdate => {
          const contactsData = serverUpdate.docs.map(_doc => {
            const data = _doc.data();
            data['id'] = _doc.id;
            return data;
          });
          this.setState({ contacts: contactsData });
        });
      };
      loadEmailerRequests(){
        firebase
        .firestore()
        .collection('emailers')
        .orderBy('timestamp', 'desc')
        .onSnapshot(serverUpdate => {
          const emailersData = serverUpdate.docs.map(_doc => {
            const data = _doc.data();
            data['id'] = _doc.id;
            return data;
          });
          this.setState({ emailers: emailersData });
          });
        };
    render(){
        const { contacts, emailers } = this.state;
        const emailerList = emailers.map((email, key) => {
            let time = email.timestamp.toDate().toLocaleDateString();
            return(
                <div key={key} style={{border: '1px solid black'}}>
                    <section style={{width: '30vw', display: 'inline-block'}}>{email.email}</section><section style={{width: '9vw', display: 'inline-block'}}>{time}</section>
                </div>
            )
        })
        const contactList = contacts.map((contact, key) => {
            // let addService = []
            let time = contact.timestamp.toDate().toDateString();
            if (contact.addServices){
                const addedService = contact.addServices
                let addService = addedService.map((service, k) => {


            // let addedServices = addedService.map((service, k) => {
                return(
                    <li key={k}> {service}</li>
                )
            })
        // } 

            return(
                <div key={key} style={{border: '1px solid black', margin: '0 0 1vw 0', padding: '1vw'}}>
                    <section style={{textAlign: 'right'}}><strong>{time}</strong></section> 
                    <section><strong>Contact Name:</strong> {contact.fromName}</section>
                    <section><strong>Contact Email:</strong> {contact.fromEmail}</section>
                    <section><strong>Referral Name:</strong> {contact.toName}</section>
                    <section><strong>Referral Email:</strong> {contact.toEmail}</section>
                    <section><strong>Business/Location:</strong> {contact.businessName}</section>
                    <strong>Additional Services:</strong>
                    <ul>{addService}</ul>
                    <section><strong>Subject:</strong> {contact.subjectTitle}</section>
                    <section><strong>Content:</strong> {contact.subjectContent}</section>
                </div>
            )
        } else {
            return(
                <div key={key} style={{border: '1px solid black', margin: '0 0 1vw 0', padding: '1vw'}}>
                    <section style={{textAlign: 'right'}}><strong>{time}</strong></section> 
                    <section><strong>Contact Name:</strong> {contact.fromName}</section>
                    <section><strong>Contact Email:</strong> {contact.fromEmail}</section>
                    <section><strong>Referral Name:</strong> {contact.toName}</section>
                    <section><strong>Referral Email:</strong> {contact.toEmail}</section>
                    <section><strong>Business/Location:</strong> {contact.businessName}</section>
                    {/* <stong>Additional Services:</stong> */}
                    {/* <ul>{addedServices}</ul> */}
                    <section><strong>Subject:</strong> {contact.subjectTitle}</section>
                    <section><strong>Content:</strong> {contact.subjectContent}</section>
                </div>
            )
        }
        })
            return(
            <div style={{width: '100vw', position: 'relative'}}>
                <div style={{float: 'left', width: '40vw', maxHeight: '80vh', padding: '5vw 2.5vw 5vw 7.5vw', background: '#fff', overflow: 'auto'}}>
                    {contactList}
                </div>
                <div style={{float: 'right', width: '40vw', maxHeight: '80vh', padding: '5vw 7.5vw 5vw 2.5vw', background: '#fff', overflow: 'auto'}}>
                    {emailerList}
                </div>
            </div>
        );
    };
};