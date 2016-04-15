import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Field from '../components/Field.jsx';
import Button from '../components/Button.jsx';
import Legend from '../Legend.jsx';

export default class Login extends Component {
  goSignUp() {
    browserHistory.push('/signup');
  }
  render() {
    return (
        <form className="qc-sessions">
          <Legend/>
        <div className="qc-sessions-fields">
          <Field  placeHolder="" labelText= "Email"/>
          <Field  placeHolder="" labelText= "Password" fieldType="password"/>
        </div>
        <div className="qc-sessions-action">
          <input className="qc-button" type="submit" value="GO"/>
        </div>
        <span className="qc-sessions-action-text" onClick={this.goSignUp}>Create account</span>
        </form>
    )
  }
}
