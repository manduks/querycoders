import React, { Component, PropTypes } from 'react';


export default class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.defaultChecked,
    };
  }
  onChangeSwitch() {
    this.setState({'checked': !this.state.checked});
    this.props.onChange(this, this.state.checked);
  }
  render() {
    const { ref, ...other } = this.props;
    return (
      <div className="onoffswitch">
        <input
          type="checkbox"
          name="onoffswitch"
          className="onoffswitch-checkbox"
          id="myonoffswitch"
          ref="checkbox"
          {...other}
          onChange={this.onChangeSwitch.bind(this)}
        />
        <label className="onoffswitch-label" htmlFor="myonoffswitch">
              <span className="onoffswitch-inner"></span>
              <span className="onoffswitch-switch"></span>
          </label>
      </div>
    );
  }
}

Switch.propTypes = {
  onChange: PropTypes.func.isRequired
};
