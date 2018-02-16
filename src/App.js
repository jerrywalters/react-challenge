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
import PatientDetail from './components/PatientDetail';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Switch>          
          <Route path={`/patients/:patientId`} component={PatientDetail}/>
          <Route path='/patients' component={PatientTable}/>
        </Switch>
      </div>
    );
  }
}

export default App;
