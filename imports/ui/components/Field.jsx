import React, { Component, PropTypes } from 'react';


export default class Field extends Component {
  constructor(props) {
    super(props);
  }

  getValue() {
    return this.refs.field.value
  }

  render() {
    const className = 'qc-field ' + this.props.type;
    let { fieldType, ...other } = this.props;

    fieldType = fieldType || 'text';

    return (
      <div className={className}>
        <label>{this.props.labelText} :</label>
        <input type={fieldType} autoComplete="off" ref="field" {...other}/>
      </div>
    );
  }
}

Field.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeHolder: PropTypes.string
};
