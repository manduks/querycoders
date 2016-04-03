import React, { Component } from 'react';
import Field from './Field.jsx';
import Checkbox from './Checkbox.jsx';


export default class SearchField extends Component {
  onClick() {
    alert(234234);
  }

  render() {
    return (
      <div className='qc-search-field'>
        <Field  placeHolder="JS, JAVA, HTML ..." labelText= "Search" type="search"/>
        <section>
          <Checkbox labelText= "Skills"/>
          <Checkbox labelText= "Location"/>
        </section>
      </div>
    );
  }
}
