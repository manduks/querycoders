import React, { Component } from 'react';


export default class Legend extends Component {
  onClick() {
    alert(234234);
  }

  render() {
    return (
      <section className="qc-legend" onClick={this.onClick}>
        <img src="./img/logo.svg"/>
        <section> <b>Query</b> the right <b>Coders</b> for your project</section>
      </section>
    );
  }
}
