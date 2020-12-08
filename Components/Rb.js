import React, {useContext} from 'react';
import {Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import {Context} from '../GlobalContextProvider';
import Jobs from '../Pages/Jobs';

// This filters jobs in New York
function jobType() {
  const {state, dispatch, isCheked} = useContext(Context);
  const {jobs, loading} = state;

  const fielterJobType = !loading && jobs && jobs.map(job => job.type === 'Full time');
  console.log(fielterJobType);
  return (
    <Router>
      <fieldset>
      <label>Full time</label>
      <Link to="/jobType"><input type="checkbox"/></Link>
      </fieldset>
      <Switch>
        <ul>
          <Route path="/jobType">
            {fielterJobType && fielterJobType.map(job =>( <Jobs key={job.id} job={job}/>))}
          </Route>
        </ul>
      </Switch>
    </Router>
  )
}

export default jobType
