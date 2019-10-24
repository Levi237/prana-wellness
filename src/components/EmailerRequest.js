import React, { Component } from 'react';

import firebase from 'firebase/app'


const inputStyle = {
    display: 'inline-block',
    float: 'left',
    width: '75%',
    marginLeft: '5%',
    maxWidth: '550px',
    height: '56px',
    fontSize: '24px',
    lineHeight: '29px',
    color: 'rgba(0, 0, 0, 0.5)',
}

const btnStyle = {
    padding: '0',
    background: 'transparent',
    border: '1px solid #fff',
    color: 'white',
    width: '16px',
    minWidth: '10%',
    height: '63px',
    display: 'inline-block',
    float: 'right',
    marginRight: '5%',
}

const arrowStyle = {
    borderRight: '1px solid #FFFFFF',
    borderTop: '1px solid #FFFFFF',
    boxSizing: 'border-box',
    transform: 'rotate(45deg)',
    height: '16px',
    width: '16px',

    marginLeft: '5px',
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
        const { email } = this.state
        return(
            <>
            <form className="feedback-form" onSubmit={(e) => {this.handleSubmit(e)}}>

                <input
                    className="emailer-input"
                    name="email"
                    type="email" 
                    onChange={this.handleChange}
                    placeholder="Enter your email here"
                    required
                    value={ email ? email : ""}
                    style={inputStyle}
                />

    
                    <button type="submit" style={btnStyle}><div style={arrowStyle}></div></button>

            </form>
            </>
        )
    }
}