import React, { Component } from 'react';

import firebase from 'firebase/app'

export default class ReferralRequest extends Component {
    state = {
        name: null,
        email: null,
    };

    handleSubmit = async (e) => {

        e.preventDefault();
        const newFromDB = await firebase.firestore()
            .collection('referrals')
            .add({
                ...this.state,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
        return newFromDB
    };
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            name: e.target.value,
            email: e.target.value
        })
    }
    
    render(){
        const { name, email } = this.state
        return(
            <>
            <form className="feedback-form" onSubmit={(e) => {this.handleSubmit(e)}}>
            <div className="input-group">
                <input
                    className="emailer-input"
                    name="email"
                    type="email" 
                    onChange={this.handleChange}
                    placeholder="Enter your email here"
                    required
                    value={name}
                />
                <input
                    className="emailer-input"
                    name="email"
                    type="email" 
                    onChange={this.handleChange}
                    placeholder="Enter your email here"
                    required
                    value={email}
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