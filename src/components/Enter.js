import React, { Component } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

export default class Enter extends Component {
    state = {
        admin: 'admin@prana-wellness.life',
        email: '',
        password: '',
        fireErrors:'',
        formTitle: 'Login',
        loginBtn: true,
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    login = e => {
        const { email, admin, password } = this.state
        e.preventDefault();
        if (email === admin){
            firebase.auth().signInWithEmailAndPassword(email, password)
                .catch((error) => {
                    this.setState({fireErrors: error.message})
                });
        };
    };
    register = e => {
        const { email, admin, password } = this.state
        e.preventDefault();
        if (email === admin){
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((error) => {
                this.setState({fireErrors: error.message})
            });
        };
    };

    getAction = action => {
        if (action === 'reg'){
            this.setState({formTitle: 'Register New User', loginBtn: false, fireErrors: ''})
        } else {
            this.setState({formTitle: 'Login', loginBtn: true, fireErrors: ''})
        };
    };


    render(){
        const { fireErrors, loginBtn, formTitle, email, password } = this.state

        let errorNotification = fireErrors ? 
            <div className="Error">{fireErrors}</div> : null;
        let submitBtn = loginBtn ? 
            <button className="loginBtn" type="submit" onClick={this.login}>Enter</button> : 
            <button className="loginBtn" type="submit" onClick={this.register}>Save New Account</button>;
        let login_register = loginBtn ? 
            <button className="registerBtn" onClick={() => this.getAction('reg')}>Register Account</button> : 
            <button className="registerBtn" onClick={() => this.getAction('login')}>Login</button>;

        return(
            <div className="enter-container ">
                <div className="enter-form">
                    <div className="errorNotification">{errorNotification}</div>
                    <div id="title">{formTitle}</div>
                        <div className="body">
                            <form>
                                <input type="email" value={email} onChange={this.handleChange} name="email" placeholder="email"/>
                                <input type="password" value={password} onChange={this.handleChange} name="password" placeholder="password"  />
                                {submitBtn}
                            </form>
                            {login_register}
                        </div>
                </div>
            </div>
        );
    };
};