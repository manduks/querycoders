import React, { Component, PropTypes } from 'react';

import Field from './Field.jsx';
import Switch from './Switch.jsx';
import Button from './Button.jsx';



export default class SearchField extends Component {
  onChangeSwitch(switchComponent) {
    console.log(arguments);
     this.props.onChange(this, {});
  }

  render() {
    return (
      <div className='qc-search-field'>
        <Field  placeHolder="JS, JAVA, HTML ..." labelText= "Search" type="search"/>
        <section>
          <Switch ref="location" onChange={this.onChangeSwitch.bind(this)} defaultChecked={true}/>
          <Button text="Search" type="action" />
        </section>
      </div>
    );
  }
}
SearchField.propTypes = {
  onChange: PropTypes.func.isRequired
};
