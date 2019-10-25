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
        .collection('referrals')
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
        const { contacts } = this.state;
        const contactList = contacts.map((contact, key) => {
            return(
                <div ley={key}>{contact.fromEmail}</div>
            )
        })
        return(
            <>
            {contactList}
            </>
        );
    };
};