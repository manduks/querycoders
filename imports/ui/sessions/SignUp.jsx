import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Field from '../components/Field.jsx';
import Button from '../components/Button.jsx';
import Legend from '../Legend.jsx';

export default class SignUp extends Component {
  goSignIp() {
    browserHistory.push('/signin');
  }
  render() {
    return (
        <section className="qc-sessions">
          <Legend/>
        <div className="qc-sessions-fields">
          <Field  placeHolder="" labelText= "Email"/>
          <Field  placeHolder="" labelText= "Password"/>
          <Field  placeHolder="" labelText= "Confirm"/>
        </div>
        <div className="qc-sessions-action">
          <Button text="Create Account"/>
        </div>
        <span className="qc-sessions-action-text" onClick={this.goSignIp}>Already have an account?</span>
        </section>
    )
  }
}
