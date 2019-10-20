import React, { Component } from 'react';

import firebase from 'firebase/app'

export default class EmailerRequest extends Component {
    state = {
        email: null,
    };

// Send a message to the device corresponding to the provided
// registration token.
handleSubmit = async () => {

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
    })
}
    render(){
        return(
            <>
            <form className="feedback-form" onSubmit={this.handleSubmit}>
            <div className="input-group">
                <input
                    className="emailer-input"
                    name="email"
                    type="email" 
                    onChange={this.handleChange}
                    placeholder="Enter your email here"
                    required
                    value={this.state.email}
                />
                </div>
                <div className="btn-group">

                    <button type="submit">SUBMIT</button>
                </div>
            </form>
            </>
        )
    }
}