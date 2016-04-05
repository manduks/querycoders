import React, { Component } from 'react';


import Button from './components/Button.jsx';
import Field from './components/Field.jsx';
import Checkbox from './components/Checkbox.jsx';

import Header from './Header.jsx';
import Legend from './Legend.jsx';
import SearchField from './components/SearchField.jsx';
import Coders from './Coders.jsx';
import Footer from './Footer.jsx';

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <Legend/>
        <SearchField/>
        <Coders/>
        <section className="qc-go-pro">
          <span >WANT MORE ?</span>
          <Button text="GO PRO"/>
        </section>
        <Footer/>
      </div>
    );
  }
}
