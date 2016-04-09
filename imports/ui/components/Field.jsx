import React, { Component, PropTypes } from 'react';


export default class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || '',
    };
  }

  onChange() {
    this.setState({'value': this.refs.field.value});
  }

  render() {
    const className = 'qc-field ' + this.props.type;
    return (
      <div className={className}>
        <label>{this.props.labelText} :</label>
        <input type="text" autoComplete="off" ref="field" placeholder={this.props.placeHolder} onChange={this.onChange.bind(this)}/>
      </div>
    );
  }
}

Field.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeHolder: PropTypes.string
};
