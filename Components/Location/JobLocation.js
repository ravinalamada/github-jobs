import React, {useState,useContext} from 'react';
import {Link} from 'react-router-dom';
import {Context} from '../../GlobalContextProvider';

// This will filter the location
function FilteredLocation() {
  const {state, dispatch } = useContext(Context);
  const [searchLocation, setSearchLocation] = useState('');
  const {loading, jobs} = state;

  // Search the job location
  function handleSearchLocation(e) {
    e.preventDefault();
  // This filter the Job title and company name
    const searchJobByLocation = !loading && jobs && jobs.filter(job => job.location.toLowerCase() === searchLocation.toLocaleLowerCase());
    // Dispatch the state
    dispatch({ type: 'SEARCH_JOB_BY_LOCATION', searchJobByLocation });
    alert(`There are ${searchJobByLocation.length}  jobs in there`);
    setSearchLocation('')
  }

  // This will toggle the button
  function toggleInput() {
    dispatch({type:"TOGGLE_CHECKBOX"})
  }

  return (
    <div>
      <form onSubmit={handleSearchLocation}>
        <fieldset className="job--location">
          <label>Location</label>
          <input type="text" placeholder="City, state, zip code or country" value={searchLocation} onChange={(e) => setSearchLocation(e.target.value)}/>
        </fieldset>
      </form>
      <form>
        <fieldset className="job--location--fieldset">
          <label>London</label>
          <Link className="link--location" to="/londonLocation">
            <input type="checkbox" onChange={toggleInput}/>
          </Link>
        </fieldset>
        <fieldset className="job--location--fieldset">
          <label>Amsterdam</label>
          <Link className="link--location" to="/amsterdam">
            <input type="checkbox" onChange={toggleInput} />
          </Link>
        </fieldset>
        <fieldset className="job--location--fieldset">
          <label>New York</label>
          <Link className="link--location" to="/newYorkLocation">
            <input type="checkbox" onChange={toggleInput}/>
          </Link>
        </fieldset>
        <fieldset className="job--location--fieldset">
          <label>Berlin</label>
          <Link className="link--location" to="/berlin">
            <input type="checkbox" onChange={toggleInput} /></Link>
        </fieldset>
      </form>
    </div>

  )
}

export default FilteredLocation
