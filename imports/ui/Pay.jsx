import React, { Component } from 'react';
import Button from './components/Button.jsx';
import Legend from './Legend.jsx';

export default class Pay extends Component {
  render() {
    return (
        <section className="qc-pay-container">
          <Legend/>
          <Button text="Pay $9 USD Pal"/>
        </section>
    )
  }
}
