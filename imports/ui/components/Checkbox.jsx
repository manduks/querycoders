import React, { Component, PropTypes } from 'react';


export default class Checkbox extends Component {
  render() {
    const { labelText, ...other } = this.props;
    
    return (
      <div className="qc-checkbox">
        <input
          type="checkbox"
          {...other}
          />
        <label>{labelText} </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  labelText: PropTypes.string.isRequired
};
