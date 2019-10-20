import React, { Component } from 'react';

import firebase from 'firebase/app'

const btnStyle = {
    padding: '0',
    background: 'transparent',
    border: '1px solid #fff',
    color: 'white',
    'font-size': '4vw',
}

const arrowStyle = {
    'border-right': '1px solid #FFFFFF',
    'border-top': '1px solid #FFFFFF',
    'box-sizing': 'border-box',
    transform: 'rotate(45deg)',
    height: '2vw',
    width: '2vw',
    'margin-left': '1vw',
}

export default class EmailerRequest extends Component {
    state = {
        email: null,
    };

    handleSubmit = async (e) => {
        e.preventDefault();
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
            <form className="feedback-form" onSubmit={(e) => {this.handleSubmit(e)}}>
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

                    <button type="submit" style={btnStyle}><div style={arrowStyle}></div></button>
                </div>
            </form>
            </>
        )
    }
}