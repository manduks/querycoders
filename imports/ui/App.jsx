import React, { Component } from 'react';
import { browserHistory } from 'react-router';
/* Import components*/
import Header from './Header.jsx';
import Legend from './Legend.jsx';
import SearchField from './components/SearchField.jsx';
import Button from './components/Button.jsx';
import Coders from './Coders.jsx';
import Footer from './Footer.jsx';

// App component - represents the whole app
export default class App extends Component {
  constructor() {
   super();
   this.render = this.render.bind(this);
  }
  goToPay() {
    browserHistory.push('/pay');
  }
  onChangeSeachField() {
    console.log(arguments);
  }
  render() {
    return (
      <div className="container">
        <Header/>
        <Legend/>
        <SearchField onChange={this.onChangeSeachField.bind(this)}/>
        <Coders/>
        <section className="qc-go-pro">
          <span >WANT MORE ?</span>
          <Button text="GO PRO $9.00" onClick={this.goToPay}/>
        </section>
        <Footer/>
      </div>
    );
  }
}
