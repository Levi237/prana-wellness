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
                <label htmlFor='MERGE1'>
                    <input 
                        type="text" 
                        name="FNAME" 
                        id="MERGE1" 
                        value={fNameValue}
                        placeholder="First Name" 
                        onChange={(e)=>{this.setState({fNameValue: e.target.value});}}
                        required
                    />
                </label>
                <label htmlFor='MERGE2'>
                    <input 
                        type="text" 
                        name="LNAME" 
                        id="MERGE2" 
                        value={lNameValue}
                        placeholder="Last Name" 
                        onChange={(e)=>{this.setState({lNameValue: e.target.value});}}
                    />
                </label>
                <label htmlFor='MERGE0'>
                    <input 
                        type="email" 
                        name="EMAIL" 
                        id="MERGE0"
                        value={emailValue}
                        placeholder="Email" 
                        onChange={ (e)=>{this.setState({emailValue: e.target.value});} } 
                        autoCapitalize="off" 
                        autoCorrect="off"
                        required
                     /> 
                </label>
                <label htmlFor='LOCATION'>
                    <input 
                        type="text" 
                        name="LOCATION" 
                        id="LOCATION" 
                        value={locationValue}
                        placeholder="Location" 
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
                    <input 
                        type="text" 
                        name="SUBJECT" 
                        id="SUBJECT" 
                        value={subjectValue}
                        placeholder="Subject" 
                        onChange={(e)=>{this.setState({subjectValue: e.target.value});}}
                    />
                </label>
                <label htmlFor='MESSAGE'>
                    <textarea 
                        type="text" 
                        name="MESSAGE" 
                        id="MESSAGE" 
                        value={messageValue}
                        placeholder="Message" 
                        onChange={(e)=>{this.setState({messageValue: e.target.value});}}
                    />
                </label>
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

    h3 {
        margin: 0;
        text-transform: capitalize;
    }
    label {
        display: inline-block;
        width: 42.5%;
        &:first-of-type{}
        &:nth-of-type(2){
            margin-left: 5%
        }
        &:nth-of-type(3){}
        &:nth-of-type(4){
            margin-left: 5%
        }
        &:nth-of-type(5){
            width: 100%;
            input {
                width: 86%;
                padding: 5px 2%!important;
            }
            // background-color: blue;
        }
        &:nth-of-type(6){
            width: 100%;
            textarea {
                width: 86%;
                border: 1px solid black;
                border-radius: 2px;
                height: 150px;
                margin: 5px 0;
                font-family: Montserrat, Arial;
                font-weight: 500;
                font-size: 16px;
                line-height: 20px;
                color: #473E4E;
                margin: 5px 0 20px 0;
                padding: 2%;
            }
        }
        input {
            width: 90%;
            padding: 5px 5%;
        }
    }
    > div {
        max-width: 600px;
        margin: 0 auto;
        width: 100%;
        > button {
            vertical-align: top;
            width: 150px;
            height: 54px;
            font-size: 16px;
            padding: 5px 15px;
            margin: 5px;
        }
    }}
`;