import React, { Component } from 'react';
import Field from './Field.jsx';
import Checkbox from './Checkbox.jsx';


export default class SearchField extends Component {
  onClick() {
     Meteor.call('github.find', 'Oaxaca');
  }

  render() {
    return (
      <div className='qc-search-field'>
        <Field  placeHolder="JS, JAVA, HTML ..." labelText= "Search" type="search"/>
        <section>
          <Checkbox labelText= "Near my location" defaultChecked={false} onClick={this.onClick.bind(this)}/>
        </section>
      </div>
    );
  }
}
