import React, { Component } from 'react';
import styled from 'styled-components';

// import Mailchimp from 'react-mailchimp-form';
 
export default class EmailComponent extends Component { 
    state = {
      emailValue: '',
      fNameValue: '',
      lNameValue: '',
    };
    render(){

const { emailValue, fNameValue, lNameValue } = this.state
    return (
      <Container>
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
               
                <input 
                    type="hidden" 
                    name="SERVICES" 
                    id="SERVICES" 
                    value="Free Meditation"
                />
                
                <AuthFilter aria-hidden="true"><input type="text" name="b_0e3bf36f8cbe7c4f0019bd050_fe06177933" tabindex="-1" value=""/></AuthFilter>
                <div className="clear">
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                </div>
              </Form> 
        {/* <Mailchimp
            action='https://travelslay.us12.list-manage.com/subscribe/post?u=0e3bf36f8cbe7c4f0019bd050&id=fe06177933'
            fields={[
                {
                    name: 'EMAIL',
                    placeholder: 'Email',
                    type: 'email',
                    required: true
                },
                {
                    name: 'FNAME',
                    placeholder: 'First Name',
                    type: 'text',
                    required: true
                },
                {
                    name: 'LNAME',
                    placeholder: 'Last Name',
                    type: 'text',
                    required: false
                }
            ]}
            messages = {
                {
                  sending: "Sending...",
                  success: "Success!  Please check your email to receive your free Meditation tool",
                  error: "An unexpected internal error has occurred.",
                  empty: "You must write an e-mail.",
                  duplicate: "Too many subscribe attempts for this email address",
                  button: "Subscribe"
                }
              }
        /> */}
        </Container>
    );
  }

}
 
const Container = styled.div`
`;
const Form = styled.form`
`;
const AuthFilter = styled.div`
    position: absolute; left: -5000px;
`;