import React, { Component, PropTypes } from 'react';

import Field from './Field.jsx';
import Switch from './Switch.jsx';
import Button from './Button.jsx';



export default class SearchField extends Component {
  onChangeSwitch(switchComponent) {}

  onSearch() {
    const values = {
      switchValue: this.refs.switch.state.value,
      fieldValue : this.refs.field.getValue(),
    };
    this.setState(values);
    this.props.onSearch(this, values);
  }

  render() {
    return (
      <div className='qc-search-field'>
        <Field  ref="field" placeHolder="JS, JAVA, HTML ..." labelText= "Search" type="search"/>
        <section>
          <Switch ref="location" ref="switch" onChange={this.onChangeSwitch} defaultChecked={true}/>
          <Button text="Search" type="action" onClick={this.onSearch.bind(this)}/>
        </section>
      </div>
    );
  }
}
SearchField.propTypes = {
  onSearch: PropTypes.func.isRequired
};
