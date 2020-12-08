import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from '../Components/Header';
import JobsList from '../Components/JobsList';
import {GlobalStyle} from '../styles';
import JobLocation from '../Components/JobLocation';
import JobDetails from '../Components/JobDetails';
import JobType from '../Components/JobType';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>Github jobs</h1>
      <Header />
      <div className="App--container">
        <div>
          <JobType />
          <JobLocation />
        </div>
        <div>
          <Switch>
          <Route exact path="/">
          <JobsList />
          </Route>
          <Route path="/:jobId">
          <JobDetails />
          </Route>
          </Switch>
        </div>
    </div>
    </div>
  )
}

export default App
