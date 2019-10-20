import React, { Component } from 'react';

import firebase from 'firebase/app'


const inputStyle = {
    display: 'inline-block',
    float: 'left',
    width: '75%',
    'margin-left': '5%',
    'max-width': 'auto',
    height: '56px',
    'font-size': '24px',
    'line-height': '29px',
  
    color: 'rgba(0, 0, 0, 0.24)',
}

const btnStyle = {
    padding: '0',
    background: 'transparent',
    border: '1px solid #fff',
    color: 'white',
    'width': '16px',
    'min-width': '10%',
    height: '63px',
    display: 'inline-block',
    float: 'right',
    'margin-right': '5%',
}

const arrowStyle = {
    'border-right': '1px solid #FFFFFF',
    'border-top': '1px solid #FFFFFF',
    'box-sizing': 'border-box',
    transform: 'rotate(45deg)',
    height: '16px',
    width: '16px',

    'margin-left': '5px',
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

                <input
                    className="emailer-input"
                    name="email"
                    type="email" 
                    onChange={this.handleChange}
                    placeholder="Enter your email here"
                    required
                    value={this.state.email}
                    style={inputStyle}
                />

    
                    <button type="submit" style={btnStyle}><div style={arrowStyle}></div></button>

            </form>
            </>
        )
    }
}