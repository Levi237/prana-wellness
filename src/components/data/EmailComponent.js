import React, { Component } from 'react';

import Mailchimp from 'react-mailchimp-form';
 
class EmailComponent extends Component {
  render() {
    return (
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
                    placeholder: 'first name',
                    type: 'text',
                    required: true
                }
                ,
                {
                    name: 'LNAME',
                    placeholder: 'last name',
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
        />
    );
  }
}
 
export default EmailComponent;