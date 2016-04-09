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
   this.state = {
     resultData: [],
   };
  }
  goToPay() {
    browserHistory.push('/pay');
  }
  searchForCoders(component, values) {
    const self = this;
    Meteor.call('github.find', values, function (err, data) {
      console.log(data);
      self.setState({resultData: data.items});
    });
  }
  render() {
    return (
      <div className="container">
        <Header/>
        <Legend/>
        <SearchField onSearch={this.searchForCoders.bind(this)}/>
        <Coders data={this.state.resultData}/>
        <section className="qc-go-pro">
          <span >WANT MORE ?</span>
          <Button text="GO PRO $9.00" onClick={this.goToPay}/>
        </section>
        <Footer/>
      </div>
    );
  }
}
