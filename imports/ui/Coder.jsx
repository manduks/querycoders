import React, { Component, PropTypes } from 'react';


export default class Coder extends Component {
  render() {
    const coder = this.props.coder;
    return (
      <li className="qc-item">
        <img src="./img/coder.png"/>
        <section className="qc-item-info">
          <span className="qc-item-name"> {coder.name}</span>
          <span className="qc-item-email">{coder.email}</span>
        </section>
        <section className="qc-item-details">
          <span className="qc-item-score">10/10</span>
          <img className="qc-item-star" src="./img/star.svg"/>
        </section>
      </li>
    );
  }
}
Coder.propTypes = {
   coder: PropTypes.object.isRequired,
 };
