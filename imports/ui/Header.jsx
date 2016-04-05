import React, { Component} from 'react';
import { browserHistory } from 'react-router';

import Button from './components/Button.jsx';

export default class Header extends Component {
  goSignIn() {
    browserHistory.push('/signin');
  }
  render() {
    return (
      <header className="qc-header">
        <Button text="Login" type="login" onClick={this.goSignIn}/>
      </header>
    );
  }
}
