import React, { Component, PropTypes } from 'react';


export default class Field extends Component {
  onClick() {
    alert(234234);
  }

  render() {
    const className = 'qc-field ' + this.props.type;
    return (
      <div className={className}>
        <label>{this.props.labelText} :</label>
        <input type="text" autoComplete="off" placeholder={this.props.placeHolder}/>
      </div>
    );
  }
}

Field.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeHolder: PropTypes.string
};
