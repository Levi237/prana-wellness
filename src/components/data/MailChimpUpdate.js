import React, { Component } from 'react';
import styled from 'styled-components';

import '../admin/RequestForm.css';
// "https://travelslay.us12.list-manage.com/subscribe/post?u=0e3bf36f8cbe7c4f0019bd050&amp;id=fe06177933"

export default class MailChimpUpdate extends Component { 
    state = {
        emailValue: '',
        fNameValue: '',
        lNameValue: '',
        locationValue: '',
        subjectValue: '',
        messageValue: '',
        addServices: [],
        services: ["Corporate Wellness", "Personal Wellness", "Prana Yoga", "Maternal Health", "Coaching", "Speaking"]
    };

    // handleSubmit = async (e) => {
    //     const { toggleContactBtn } = this.props
    //     e.preventDefault();
    //     const newFromDB = await firebase.firestore()
    //         .collection('requests')
    //         .add({
    //             ...this.state,
    //             timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //         }).then(toggleContactBtn);
    //     return newFromDB;
    // };
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

        const { emailValue, fNameValue, lNameValue, locationValue, subjectValue, messageValue , addServices, services} = this.state

        const buttonSelectors = services.map((service, key) => {
            return(
                <button 
                    key={key} 
                    id={key}
                    name={service}
                    value={service}
                    className="select-service white"
                    onClick={(e) => {this.handleSelect(e, service)}
                }>
                    <section>{service}</section>
                </button>
            );
        });
        return(
            <Container>
                {/* <form action="https://travelslay.us12.list-manage.com/profile/post" method="POST" id="subprefs-form"> */}
                <form 
                    action="https://travelslay.us12.list-manage.com/subscribe/post?u=0e3bf36f8cbe7c4f0019bd050&id=fe06177933" 
                    method="POST" 
                    id="subprefs-form" 
                    name="subprefs-form" 
                    className="validate" 
                    target="_blank" 
                    novalidate 
                >
                {/* <input type="hidden" name="u" value="eb05e4f830c2a04be30171b01"/> */}
                {/* <input type="hidden" name="id" value="8281a64779"/> */}
                <label htmlFor='MERGE0'>
                    Email
                    <input 
                        type="email" 
                        name="EMAIL" 
                        id="MERGE0"
                        value={emailValue} 
                        onChange={ (e)=>{this.setState({emailValue: e.target.value});} } 
                        autoCapitalize="off" 
                        autoCorrect="off"
                     /> 
                </label>
                <label htmlFor='MERGE1'>
                    First name
                    <input 
                        type="text" 
                        name="FNAME" 
                        id="MERGE1" 
                        value={fNameValue} 
                        onChange={(e)=>{this.setState({fNameValue: e.target.value});}}
                    />
                </label>
                <label htmlFor='MERGE2'>
                    Last name
                    <input 
                        type="text" 
                        name="LNAME" 
                        id="MERGE2" 
                        value={lNameValue} 
                        onChange={(e)=>{this.setState({lNameValue: e.target.value});}}
                    />
                </label>
                <label htmlFor='LOCATION'>
                    LOCATION
                    <input 
                        type="text" 
                        name="LOCATION" 
                        id="LOCATION" 
                        value={locationValue} 
                        onChange={(e)=>{this.setState({locationValue: e.target.value});}}
                    />
                </label>

                
                <section>Ask about additional services:</section>
                    {buttonSelectors}
                <input 
                    type="hidden" 
                    name="SERVICES" 
                    id="SERVICES" 
                    value={addServices}
                />


                <label htmlFor='SUBJECT'>
                    Subject
                    <input 
                        type="text" 
                        name="SUBJECT" 
                        id="SUBJECT" 
                        value={subjectValue} 
                        onChange={(e)=>{this.setState({subjectValue: e.target.value});}}
                    />
                </label>
                <label htmlFor='MESSAGE'>
                    MESSAGE
                    <textarea 
                        type="text" 
                        name="MESSAGE" 
                        id="MESSAGE" 
                        value={messageValue} 
                        onChange={(e)=>{this.setState({messageValue: e.target.value});}}
                    />
                </label>
                  {/* <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/> */}

                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">
                    <label htmlFor="b_name">Name: </label>
                    <input type="text" name="b_name" tabIndex="-1" value="" placeholder="Freddie" id="b_name"/>

                    <label htmlFor="b_email">Email: </label>
                    <input type="email" name="b_email" tabIndex="-1" value="" placeholder="youremail@gmail.com" id="b_email"/>

                    <label htmlFor="b_comment">Comment: </label>
                    <textarea name="b_comment" tabIndex="-1" placeholder="Please comment" id="b_comment"></textarea>
                </div>
                <AuthFilter aria-hidden="true"><input type="text" name="b_0e3bf36f8cbe7c4f0019bd050_fe06177933" tabindex="-1" value=""/></AuthFilter>
                <div className="clear">
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                </div>
              </form>
            </Container>     
        );
    };
};

const AuthFilter = styled.div`
position: absolute; left: -5000px;
`;
const Container = styled.div`
    height: 100vh;
    width: 100vw;

    text-align: right;

    background-color: #fff;

    position: absolute;
    z-index: 91;

    > button {
        background-color: transparent;
        border-radius: 100px;
        margin: 10px;
        font-size: 14px;
        max-height: 30px;
        max-width: 30px;
        min-height: 30px;
        min-width: 30px;
        padding: 0;
        text-align: center;
        position: relative;
        z-index: 99999;
    }
    p {
        text-align: center;
        padding: 2% 20%;

    }
    form {
        text-align: center;
    }
    form input {
        height: 40px;
        width: 300px;
        display: inline-block;
        margin: 10px auto;
        font-size: 18px;
        padding: 4px 15px;
    }
    form p {
        position: absolute;
        top: 0;
        width: 100vw;
        padding: 2% 0;
    }
    form button {
        font-size: 18px;
        position: relative;
        z-index: 900;
    }
`;

