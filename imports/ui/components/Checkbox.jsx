import React, { Component, PropTypes } from 'react';


export default class Checkbox extends Component {
  onClick() {
    alert(234234);
  }

  render() {
    return (
      <div className="qc-checkbox">
        <input type="checkbox" autoComplete="off" onClick={this.onClick}/>
        <label>{this.props.labelText} </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  labelText: PropTypes.string.isRequired
};
