import React, {useContext} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {Context} from '../GlobalContextProvider';
import Jobs from '../Pages/Jobs';

// This will fielter the location
function FilteredLocation() {
  const {state, dispatch, loading} = useContext(Context);
  const {jobs} = state;
  console.log(jobs);

  function handleFilteredLocation(e) {
    const value = e.target.value;
    if(!loading) {
     const filter = jobs.filter(job => job.location === value)
     const mappedFielteredLoc = filter.map(job => (<Jobs key={job.key} job={job}/>))
    dispatch({type:"FIELTER_LOCATION", location:mappedFielteredLoc})
    }
  }

  return (
    <form>
      <label>Location</label>
      <select>
          <option>City, state, zip code or country</option>
        {!loading && jobs && jobs.map(job => (<option key={job.id} value={job.location}>{job.location}</option>))}
      </select>
    </form>
  )
}

export default FilteredLocation
