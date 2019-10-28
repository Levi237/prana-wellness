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
            return(
                <div key={key} style={{border: '1px solid black'}}>
                    <section>{email.email}</section>
                </div>
            )
        })
        const contactList = contacts.map((contact, key) => {
        //     const addedService = contact.addServices
            
        //     if (contact.addServices){
        //     let addedServices = addedService.map((service, k) => {
        //         return(
        //             <li key={k}> {service}</li>
        //         )
        //     })
        // } 

            return(
                <div key={key} style={{border: '1px solid black'}}>
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