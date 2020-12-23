import React, { Component } from 'react';
import styled from 'styled-components';


export default class ReferralRequest extends Component {
    state = {
        emailValue: '',
        fNameValue: '',
        lNameValue: '',
        referralName: '',
        referralEmail: '',
        locationValue: '',
        subjectValue: '',
        messageValue: '',
        addServices: ['']
    }

    
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            addServices: 'referral name: ' +this.state.referralName + ', referral email:  ' + this.state.referralEmail
        });
    };
    render(){

        const { emailValue, fNameValue, lNameValue, locationValue, subjectValue, messageValue , addServices, referralEmail, referralName } = this.state
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
                <label htmlFor=''>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        onChange={(e)=>{this.setState({referralName: e.target.value});}}
                        autoCapitalize="off" 
                        autoCorrect="off"
                        required
                     /> 
                </label>
                <label htmlFor=''>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        onChange={(e)=>{this.setState({referralEmail: e.target.value});}}
                        autoCapitalize="off" 
                        autoCorrect="off"
                        required
                     /> 
                </label>
                
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
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" onClick={this.handleChange}/>
                </div>
              </Form> 
        );
    };
};

const ServiceBtn = styled.input`
    width: 150px;
    font-size: 20px;
    padding: 5px 15px;
    margin: 5px;
`;

const AuthFilter = styled.div`
    position: absolute; left: -5000px;
`;

const Form = styled.form`
z-index: 90000000000000;
position: fixed;
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