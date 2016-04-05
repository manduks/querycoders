import React, { Component, PropTypes } from 'react';


export default class Button extends Component {
  render() {
    const { type, text, ...other } = this.props,
      className = 'qc-button ' + type;

    return (
      <div {...other} className={className}>
        {text}
      </div>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};
