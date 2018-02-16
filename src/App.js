import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import PatientTable from './components/PatientTable';
import PatientDetail from './components/PatientDetail';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App"> 
        <Route exact path="/" render={() => <Redirect to="/patients"/>}/>
          <Switch>       
            <Route path={`/patients/:patientId`} component={PatientDetail}/>
            <Route path='/patients' component={PatientTable}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
