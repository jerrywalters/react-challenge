import React, { Component } from 'react';
import './App.css';

import { Route, Switch, BrowserRouter} from 'react-router-dom';

import PatientTable from './components/PatientTable';
import PatientDetail from './components/PatientDetail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App"> 
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
