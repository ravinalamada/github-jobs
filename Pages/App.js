import React from 'react';
import {Switch, Route} from 'react-router-dom';
// import Header from '../Components/Header';
import JobsList from '../Components/JobsList';
import {GlobalStyle} from '../styles';
// import FilteredLocation from '../Components/FilteredLocation';
import JobDetails from '../Components/JobDetails';


function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Github jobs</h1>
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
    </>
  )
}

export default App
