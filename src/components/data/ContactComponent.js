import React, { Component } from 'react';
import styled from 'styled-components';

import Mailchimp from 'react-mailchimp-form';
 
class ContactComponent extends Component {
  render() {
    // select the element that will be replaced
    // var el = document.getElementsByName('MESSAGE');
    // console.log(el)
    // <a href="/javascript/manipulation/creating-a-dom-element-51/">create a new element</a> that will take the place of "el"
    // var newEl = document.createElement('textarea');
    // newEl.innerHTML = '<>Hello World!</>';

    // replace el with newEL
    // if (el){
        // el.parentNode.replaceChild(newEl, el);
    // };
    
    return (
        <Wrapper>
        <Mailchimp
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
                },
                {
                    name: 'LOCATION',
                    placeholder: 'Location',
                    type: 'address',
                    required: false
                },
                {
                    name: 'SUBJECT',
                    placeholder: 'Subject',
                    type: 'text',
                    required: false
                },
                {   
                    id: "MESSAGE",
                    name: 'MESSAGE',
                    placeholder: 'Add Message Here',
                    type: 'text',
                    required: false
                },
                {
                    name: 'BOOTCAMP',
                    placeholder: 'Bootcamp Fitness',
                    value: 'Bootcamp Fitness',
                    type: 'text',
                    required: false
                },
                {
                    name: 'FAIRS',
                    placeholder: 'Health Fairs',
                    type: 'text',
                    required: false
                },
                {
                    name: 'RETREATS',
                    placeholder: 'Wellness Retreats',
                    type: 'text',
                    required: false
                },
                {
                    name: 'LUNCH',
                    placeholder: 'Lunch & Learn',
                    type: 'text',
                    required: false
                },
                {
                    name: 'MASSAGE',
                    placeholder: 'Corporate Massage',
                    type: 'text',
                    required: false
                },
                {
                    name: 'PLAY',
                    placeholder: 'Work Play',
                    type: 'text',
                    required: false
                }
            ]}
            messages = {
                {
                    sending: "Sending...",
                    success: "Success!  Please check your email confirmation",
                    error: "An unexpected internal error has occurred.",
                    empty: "You must write an e-mail.",
                    duplicate: "Too many subscribe attempts for this email address",
                    button: "send"
                }
            }
        />
        </Wrapper>
    );
  }
}
const inputWide = "89%";
const nameWidth = "41%";
const inputMargin = "0 1.25%"
const selectWidth = "25%";
const selectMargin = "0 1.25% 10px";
const inlineBlock = "inline-block";
const Wrapper = styled.div`

form {
    width: 100%;
    input {
        width: 89%;
        &:first-of-type {
            width: ${inputWide};
        }
        &:nth-of-type(2){
            width: ${nameWidth};
            display: ${inlineBlock};
            margin: ${inputMargin};
        }
        &:nth-of-type(3){
            width: ${nameWidth};
            display: ${inlineBlock};
            margin: ${inputMargin};
        }
        &:nth-of-type(4){
            width: ${inputWide};
        }
        &:nth-of-type(5){
            width: ${inputWide};
        }
        &:nth-of-type(6){
            width: ${inputWide};
            height: 80px;
        }
        &:nth-of-type(7){
            width: ${selectWidth};
            display: ${inlineBlock};
            margin: ${selectMargin};
        }
        &:nth-of-type(8){
            width: ${selectWidth};
            display: ${inlineBlock};
            margin: ${selectMargin};
        }
        &:nth-of-type(9){
            width: ${selectWidth};
            display: ${inlineBlock};
            margin: ${selectMargin};
        }
        &:nth-of-type(10){
            width: ${selectWidth};
            display: ${inlineBlock};
            margin: ${selectMargin};
        }
        &:nth-of-type(11){
            width: ${selectWidth};
            display: ${inlineBlock};
            margin: ${selectMargin};
        }
        &:nth-of-type(12){
            width: ${selectWidth};
            display: ${inlineBlock};
            margin: ${selectMargin};
        }
    }
}


`;

export default ContactComponent;