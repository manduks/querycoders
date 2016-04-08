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
  goToPay() {
    browserHistory.push('/pay');
  }
  render() {
    return (
      <div className="container">
        <Header/>
        <Legend/>
        <SearchField/>
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
