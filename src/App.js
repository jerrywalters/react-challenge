import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import PatientTable from './components/PatientTable';
import PatientSingle from './components/PatientSingle';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Route path='/patients' component={PatientTable}/>
        <Route path='/patients/:patientId' component={PatientSingle}/>
      </div>
    );
  }
}

export default App;
