import React, { Component } from 'react';
import styled from 'styled-components';

import '../admin/RequestForm.css';
// "https://travelslay.us12.list-manage.com/subscribe/post?u=0e3bf36f8cbe7c4f0019bd050&amp;id=fe06177933"

export default class MailChimp extends Component { 
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
                <ServiceBtn 
                    key={key} 
                    id={key}
                    name={service}
                    value={service}
                    className="select-service white"
                    onClick={(e) => {this.handleSelect(e, service)}
                }>
                   {service}
                </ServiceBtn>
            );
        });
        return(
                <Form 
                    action="https://travelslay.us12.list-manage.com/subscribe/post?u=0e3bf36f8cbe7c4f0019bd050&id=fe06177933" 
                    method="POST" 
                    id="mc-embedded-subscribe-form" 
                    name="mc-embedded-subscribe-form" 
                    className="validate" 
                    target="_blank" 
                    novalidate 
                >
                {/* <input type="hidden" name="u" value="eb05e4f830c2a04be30171b01"/> */}
                {/* <input type="hidden" name="id" value="8281a64779"/> */}
                <label htmlFor='MERGE0'>
                    <h3>Email</h3>
                    <input 
                        type="email" 
                        name="EMAIL" 
                        id="MERGE0"
                        value={emailValue} 
                        onChange={ (e)=>{this.setState({emailValue: e.target.value});} } 
                        autoCapitalize="off" 
                        autoCorrect="off"
                        required
                     /> 
                </label>
                <label htmlFor='MERGE1'>
                    <h3>First name</h3>
                    <input 
                        type="text" 
                        name="FNAME" 
                        id="MERGE1" 
                        value={fNameValue} 
                        onChange={(e)=>{this.setState({fNameValue: e.target.value});}}
                        required
                    />
                </label>
                <label htmlFor='MERGE2'>
                    <h3>Last name</h3>
                    <input 
                        type="text" 
                        name="LNAME" 
                        id="MERGE2" 
                        value={lNameValue} 
                        onChange={(e)=>{this.setState({lNameValue: e.target.value});}}
                    />
                </label>
                <label htmlFor='LOCATION'>
                    <h3>Location</h3>
                    <input 
                        type="text" 
                        name="LOCATION" 
                        id="LOCATION" 
                        value={locationValue} 
                        onChange={(e)=>{this.setState({locationValue: e.target.value});}}
                    />
                </label>

                
                <h3>Ask about additional services:</h3>
                <div>
                    {buttonSelectors}
                    <input 
                        type="hidden" 
                        name="SERVICES" 
                        id="SERVICES" 
                        value={addServices}
                    />
                </div>
                
                <label htmlFor='SUBJECT'>
                    <h3>Subject</h3>
                    <input 
                        type="text" 
                        name="SUBJECT" 
                        id="SUBJECT" 
                        value={subjectValue} 
                        onChange={(e)=>{this.setState({subjectValue: e.target.value});}}
                    />
                </label>
                <label htmlFor='MESSAGE'>
                    <h3>Message</h3>
                    <textarea 
                        type="text" 
                        name="MESSAGE" 
                        id="MESSAGE" 
                        value={messageValue} 
                        onChange={(e)=>{this.setState({messageValue: e.target.value});}}
                    />
                </label>
                  {/* <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/> */}

                {/* <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">
                    <label htmlFor="b_name">Name: </label>
                    <input type="text" name="b_name" tabIndex="-1" value="" placeholder="Freddie" id="b_name"/>

                    <label htmlFor="b_email">Email: </label>
                    <input type="email" name="b_email" tabIndex="-1" value="" placeholder="youremail@gmail.com" id="b_email"/>

                    <label htmlFor="b_comment">Comment: </label>
                    <textarea name="b_comment" tabIndex="-1" placeholder="Please comment" id="b_comment"></textarea>
                </div> */}
                <AuthFilter aria-hidden="true"><input type="text" name="b_0e3bf36f8cbe7c4f0019bd050_fe06177933" tabindex="-1" value=""/></AuthFilter>
                <div className="clear">
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                </div>
              </Form> 
        );
    };
};

const ServiceBtn = styled.button`
    width: 150px;
    font-size: 20px;
    padding: 5px 15px;
    margin: 5px;
`;

const AuthFilter = styled.div`
    position: absolute; left: -5000px;
`;

const Form = styled.form`
    label {
        display: inline-block;
    }
    h3 {
        margin: 0;
        text-transform: capitalize;
    }
    label {
        &:nth-of-type(5){
            width: 100%;
            input {
                background-color: green!important;
                width: 100%;
            }
        }
        &:nth-of-type(6){
            width: 100%;
            textarea {
                width: 100%;
                height: 300px;
                background-color: pink;
            }
        }
    }
    > div {
        width: 100%;
        > button {
            vertical-align: top;
        }
    }
`;