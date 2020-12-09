import React, {useContext, useState} from 'react';
import {Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import {Context} from '../GlobalContextProvider';

// This filters jobs in New York
function jobType() {
  const {state, dispatch} = useContext(Context);
  const {jobs, loading, isCheked} = state;
  const [jobType, setJobType] = useState(jobs);

  function handleChange() {
    const fielterJobType = !loading && jobType.map(job => job.type === 'Full time');
    console.log(fielterJobType);
    setJobType(fielterJobType);
  }

  return (
      <fieldset>
        <label>Full time</label>
        <input className="job--location__input" type="checkbox" value={jobType} onChange={handleChange}/>
      </fieldset>
  )
}

export default jobType
