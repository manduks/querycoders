import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Field from '../components/Field.jsx';
import Button from '../components/Button.jsx';
import Legend from '../Legend.jsx';

export default class SignUp extends Component {
  goSignIp() {
    browserHistory.push('/signin');
  }
  onSubmitForm (event) {
    event.preventDefault();
    const email = this.refs.email.getValue(),
    password = this.refs.password.getValue();

    Accounts.createUser({
      email: email,
      password: password
    }, function () {
       console.log('User created');
    });
  }
  validatePassword(){
    const confirmPasswordField = this.refs.confirmPassword.refs.field,
          passwordField = this.refs.password;

    if (passwordField.getValue() !== confirmPasswordField.value) {
      confirmPasswordField.setCustomValidity("Passwords Don't Match");
    } else {
      confirmPasswordField.setCustomValidity('');
    }
  }
  render() {
    return (
        <form className="qc-sessions" onSubmit={this.onSubmitForm.bind(this)}>
          <Legend/>
        <div className="qc-sessions-fields">
          <Field  placeholder="Email" fieldType="email" ref="email" labelText= "Email" required={true}/>
          <Field  placeholder="Password" ref="password" labelText= "Password" fieldType="password" onChange={this.validatePassword.bind(this)} required={true} pattern="^\S{6,}$" title="6 characters minimum"/>
          <Field  placeholder="Confirm Password" ref="confirmPassword" labelText= "Confirm" fieldType="password" onKeyUp={this.validatePassword.bind(this)} required={true} />
        </div>
        <div className="qc-sessions-action">
          <input className="qc-button" type="submit" value="Create Account"/>
        </div>
        <span className="qc-sessions-action-text" onClick={this.goSignIp}>Already have an account?</span>
        </form>
    )
  }
}
