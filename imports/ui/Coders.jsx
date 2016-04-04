import React, { Component } from 'react';
import Coder from './Coder.jsx';

export default class Coders extends Component {
  getCoders() {
    return [
      { _id: 1, email: 'armando@codetlan.com', name: 'Armando Gonzalez' },
      { _id: 2, email: 'armando@codetlan.com', name: 'Peter Anguila' },
      { _id: 3, email: 'armando@codetlan.com', name: 'Awesome Perez' },
      { _id: 4, email: 'armando@codetlan.com', name: 'Armando Gonzalez' },
      { _id: 5, email: 'armando@codetlan.com', name: 'Peter Anguila' },
      { _id: 6, email: 'armando@codetlan.com', name: 'Awesome Perez' },
      { _id: 11, email: 'armando@codetlan.com', name: 'Armando Gonzalez' },
      { _id: 12, email: 'armando@codetlan.com', name: 'Peter Anguila' },
      { _id: 13, email: 'armando@codetlan.com', name: 'Awesome Perez' },
      { _id: 14, email: 'armando@codetlan.com', name: 'Armando Gonzalez' },
      { _id: 15, email: 'armando@codetlan.com', name: 'Peter Anguila' },
      { _id: 16, email: 'armando@codetlan.com', name: 'Awesome Perez' }
    ];
  }

  renderCoders() {
    return this.getCoders().map((coder) => (
      <Coder key={coder._id} coder={coder} />
    ));
  }

  render() {
    return (
      <ul className='qc-items-list'>
        {this.renderCoders()}
      </ul>
    );
  }
}
