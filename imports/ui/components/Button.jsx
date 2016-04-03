import React, { Component, PropTypes } from 'react';


export default class Button extends Component {
  onClick() {
    alert(this.props.text);
  }

  render() {
    const className = 'qc-button ' + this.props.type;
    return (
      <div className={className} onClick={this.onClick.bind(this)}>
        {this.props.text}
      </div>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};
