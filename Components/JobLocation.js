import React, {useContext} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {Context} from '../GlobalContextProvider';
import Jobs from '../Pages/Jobs';

// This will fielter the location
function FilteredLocation() {
  const {state, dispatch, loading} = useContext(Context);
  const {jobs} = state;

  function handleFilteredLocation(e) {
    const value = e.target.value;
    if(!loading) {
     const filter = jobs.filter(job => job.location === value)
     const mappedFielteredLoc = filter.map(job => (<Jobs key={job.key} job={job}/>))
    dispatch({type:"FIELTER_LOCATION", location:mappedFielteredLoc})
    }
  }

  return (
    <div>
      <form>
        <fieldset className="job--location">
          <label>Location</label>
          <input type="text" placeholder="City, state, zip code or country"/>
        </fieldset>
      </form>
      <form>
        <fieldset className="job--location--fieldset">
          <label>London</label>
          <input type="checkbox"/>
        </fieldset>
        <fieldset className="job--location--fieldset">
          <label>Amsterdam</label>
          <input type="checkbox"/>
        </fieldset>
        <fieldset className="job--location--fieldset">
          <label>New York</label>
          <input type="checkbox"/>
        </fieldset>
        <fieldset className="job--location--fieldset">
          <label>Berlin</label>
          <input type="checkbox" />
        </fieldset>
      </form>
    </div>

  )
}

export default FilteredLocation
