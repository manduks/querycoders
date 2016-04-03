import React, { Component} from 'react';
import Button from './components/Button.jsx';

export default class Header extends Component {
  render() {
    return (
      <header className="qc-header">
        <Button text="Login" type="login"/>
      </header>
    );
  }
}
