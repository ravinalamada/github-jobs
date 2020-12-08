import React, {useContext} from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from '../Components/Header';
import JobsList from '../Components/JobsList';
import {GlobalStyle} from '../styles';
import JobLocation from '../Components/JobLocation';
import JobDetails from '../Components/JobDetails';
import JobType from '../Components/JobType';
// import { useContext } from 'react';
import {Context} from '../GlobalContextProvider';
import NYLocation from '../Components/NYLocation'
import LondonLocation from '../Components/LondonLocation';
import AmesterdamLocation from '../Components/AmesterdamLocation';
import BerlinLocation from '../Components/BerlinLocation';

function App() {
  const {state, dispatch} = useContext(Context);

  const {isCheked} = state;

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
            {!isCheked
            ?
              <Route exact path="/"><JobsList /></Route>
            :
              <Route path="/londonLocation"><LondonLocation /></Route>
            }
            {!isCheked
            ?
              <Route exact path="/"><JobsList /></Route>
            :
              <Route path="/amsterdam"><AmesterdamLocation /></Route>
            }
            {!isCheked
            ?
              <Route exact path="/"><JobsList /></Route>
            :
              <Route path="/newYorkLocation"><NYLocation /></Route>
            }
            {!isCheked
            ?
              <Route exact path="/"><JobsList /></Route>
            :
              <Route path="/berlin"><BerlinLocation /></Route>
            }
            <Route path="/:jobId"><JobDetails /></Route>
          </Switch>
        </div>
    </div>
    </div>
  )
}

export default App
