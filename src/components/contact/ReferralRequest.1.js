// import React, { Component } from 'react';
// import styled from 'styled-components';


// export default class ReferralRequest extends Component {
//     state = {
//         emailValue: '',
//         fNameValue: '',
//         lNameValue: '',
//         referralName: '',
//         referralEmail: '',
//         locationValue: '',
//         subjectValue: '',
//         messageValue: '',
//         addServices: ['']
//     }

    
//     handleChange = (e) => {
//         console.log(e, "onClick - handleChange")
//         e.preventDefault();
//         // this.setState({
//         //     addServices: 'referral name: ' +this.state.referralName + ', referral email:  ' + this.state.referralEmail
//         // });
//     };
//     render(){

//         const { emailValue, fNameValue, lNameValue, locationValue, subjectValue, messageValue, addServices, referralEmail, referralName } = this.state
//         return(
//                 <Form 
//                     action={`https:/${process.env.REACT_APP_MAILCHIMP_SRC}/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`}
//                     method="POST" 
//                     id="mc-embedded-subscribe-form" 
//                     name="mc-embedded-subscribe-form" 
//                     className="validate" 
//                     target="_blank" 
//                     novalidate 
//                 >
//                 <label htmlFor='MERGE1'>
//                     <input 
//                         type="text" 
//                         name="FNAME" 
//                         id="MERGE1" 
//                         value={fNameValue}
//                         placeholder="Your First Name" 
//                         onChange={(e)=>{this.setState({
//                             fNameValue: e.target.value, 
//                             addServices: 'referral name: ' +this.state.referralName + ', referral email:  ' + this.state.referralEmail})}}
//                         required
//                     />
//                 </label>
//                 <label htmlFor='MERGE2'>
//                     <input 
//                         type="text" 
//                         name="LNAME" 
//                         id="MERGE2" 
//                         value={lNameValue}
//                         placeholder="Your Last Name" 
//                         onChange={(e)=>{this.setState({lNameValue: e.target.value});}}
//                     />
//                 </label>
//                 <label htmlFor='MERGE0'>
//                     <input 
//                         type="email" 
//                         name="EMAIL" 
//                         id="MERGE0"
//                         value={emailValue}
//                         placeholder="Your Email" 
//                         onChange={ (e)=>{this.setState({emailValue: e.target.value});} } 
//                         autoCapitalize="off" 
//                         autoCorrect="off"
//                         required
//                      /> 
//                 </label>
//                 <label htmlFor='LOCATION'>
//                     <input 
//                         type="text" 
//                         name="LOCATION" 
//                         id="LOCATION" 
//                         value={locationValue}
//                         placeholder="Referral Location" 
//                         onChange={(e)=>{this.setState({locationValue: e.target.value});}}
//                     />
//                 </label>
//                 <label htmlFor='SERVICES'>
//                     <input 
//                         type="text" 
//                         placeholder="Referral Name" 
//                         value={referralName}
//                         onChange={(e)=>{this.setState({
//                             referralName: e.target.value,
//                             addServices: 'referral name: ' +this.state.referralName + ', referral email:  ' + this.state.referralEmail
//                         });}}
//                         autoCapitalize="off" 
//                         autoCorrect="off"
//                         required
//                      /> 
//                 </label>
//                 <label htmlFor='SERVICES'>
//                     <input 
//                         type="email" 
//                         placeholder="Referral Email" 
//                         value={referralEmail} 
//                         onChange={(e)=>{this.setState({
//                             referralEmail: e.target.value,
//                             addServices: 'referral name: ' +this.state.referralName + ', referral email:  ' + this.state.referralEmail
//                         });}}
//                         autoCapitalize="off" 
//                         autoCorrect="off"
//                         required
//                      /> 
//                     <input 
//                         type="hidden" 
//                         name="SERVICES" 
//                         id="SERVICES" 
//                         value={addServices}
//                     />
//                 </label>
                
//                 <label htmlFor='SUBJECT'>
//                     <input 
//                         type="text" 
//                         name="SUBJECT" 
//                         id="SUBJECT" 
//                         value={subjectValue}
//                         placeholder="Subject" 
//                         onChange={(e)=>{this.setState({subjectValue: e.target.value});}}
//                     />
//                 </label>
//                 <label htmlFor='MESSAGE'>
//                     <textarea 
//                         type="text" 
//                         name="MESSAGE" 
//                         id="MESSAGE" 
//                         value={messageValue}
//                         placeholder="Message" 
//                         onChange={(e)=>{this.setState({messageValue: e.target.value});}}
//                     />
//                 </label>
//                 <section aria-hidden="true"><input type="text" name="b_0e3bf36f8cbe7c4f0019bd050_fe06177933" tabindex="-1" value=""/></section>
//                 <div className="clear">
//                     <input type="submit" value="submit" name="subscribe" id="mc-embedded-subscribe" className="button" onClick={this.handleChange}/>
//                 </div>
//               </Form> 
//         );
//     };
// };

// const Form = styled.form`
//     h3 {
//         margin: 0;
//         text-transform: capitalize;
//     }
//     section {
//         position: absolute; left: -5000px;
//     }
//     label {
//         display: inline-block;

//         &:nth-of-type(7){
//             width: 100%;
//             input {
//                 width: 86%;
//                 padding: 5px 2%!important;
//             }
//         }
//         &:nth-of-type(8){
//             width: 100%;
//             margin-left: 0!important;
//         }
//         input {
//             width: 90%;
//             padding: 5px 5%;
//         }
//     }
// `;