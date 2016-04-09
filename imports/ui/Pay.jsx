import React, { Component } from 'react';
import Button from './components/Button.jsx';
import Legend from './Legend.jsx';

export default class Pay extends Component {
  render() {
    return (
        <section className="qc-pay-container">
          <Legend/>
          <ul>
            <li>Access to Linkedin API </li>
            <li>Access to Stackoverflow API</li>
            <li>Smart algorithm to suggest best players</li>
            <li>Ability to save your favorites playes</li>
          </ul>
          <Button text="Buy now $9 USD"/>
        </section>
    )
  }
}
