import React, { Component } from 'react';
import Field from '../components/Field.jsx';
import Button from '../components/Button.jsx';
import Legend from '../Legend.jsx';

export default class Login extends Component {
  render() {
    return (
        <section className="qc-sessions">
          <Legend/>
        <div className="qc-sessions-fields">
          <Field  placeHolder="" labelText= "Email"/>
          <Field  placeHolder="" labelText= "Password"/>
        </div>
        <div className="qc-sessions-action">
          <Button text="GO"/>
        </div>
        <span className="qc-sessions-action-text">Create account</span>
        </section>
    )
  }
}
