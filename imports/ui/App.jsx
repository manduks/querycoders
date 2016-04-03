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
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }

  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }


  render() {
    return (
      <div className="container">
        <Header/>
        <Legend/>
        <SearchField/>
        <Coders/>
        <Footer/>
      </div>
    );
  }
}
