import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PatientTable from './components/PatientTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PatientTable />
      </div>
    );
  }
}

export default App;
