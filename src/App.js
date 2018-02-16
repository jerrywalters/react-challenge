import React, { Component } from 'react';
import './App.css';

import { Route, Switch} from 'react-router-dom';

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
