import React, {useContext} from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from '../Components/Header';
import JobsList from '../Components/Location/JobsList';
import {GlobalStyle} from '../styles';
import JobLocation from '../Components/Location/JobLocation';
import JobDetails from '../Components/JobDetails';
import JobType from '../Components/JobType';
// import { useContext } from 'react';
import {Context} from '../GlobalContextProvider';
import NYLocation from '../Components/Location/NYLocation'
import LondonLocation from '../Components/Location/LondonLocation';
import AmesterdamLocation from '../Components/Location/AmesterdamLocation';
import BerlinLocation from '../Components/Location/BerlinLocation';

function App() {
  const {state, dispatch} = useContext(Context);

  const {isCheked} = state;

  return (
    <div className="App">
      <GlobalStyle />
      <h1>Github jobs</h1>
      {!isCheked && <Header />}
      <div className="App--container">
        <div>
          <JobType />
          <JobLocation />
        </div>
        <div>
          <Switch>
            {!isCheked
            ?
              <Route exact path="/"><JobsList /></Route>
            :
              <Route exact path="/londonLocation"><LondonLocation /></Route>
            }
            {!isCheked
            ?
              <Route exact path="/"><JobsList /></Route>
            :
              <Route exact path="/amsterdam"><AmesterdamLocation /></Route>
            }
            {!isCheked
            ?
              <Route exact path="/"><JobsList /></Route>
            :
              <Route exact path="/newYorkLocation"><NYLocation /></Route>
            }
            {!isCheked
            ?
              <Route exact path="/"><JobsList /></Route>
            :
              <Route exact path="/berlin"><BerlinLocation /></Route>
            }
            <Route exact path="/:jobId"><JobDetails /></Route>
            <Route exact path="/londonLocation/:jobId"><JobDetails /></Route>
            <Route exact path="/amesterdamLocation/:jobId"><JobDetails /></Route>
            <Route exact path="/nYLocation/:jobId"><JobDetails /></Route>
            <Route exact path="/berlinLocation/:jobId"><JobDetails /></Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App
