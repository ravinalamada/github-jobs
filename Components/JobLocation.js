import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Context} from '../GlobalContextProvider';

// This will fielter the location
function FilteredLocation() {
  const { dispatch } = useContext(Context);

  // This will toggle the button
  function toggleInput() {
    dispatch({type:"NEW_YORK_LOCATION"})
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
          <Link className="link--location" to="/londonLocation">
            <input type="checkbox" onChange={toggleInput}/>
          </Link>
        </fieldset>
        <fieldset className="job--location--fieldset">
          <label>Amsterdam</label>
          <Link className="link--location" to="/amsterdam">
            <input type="checkbox" onClick={toggleInput} />
          </Link>
        </fieldset>
        <fieldset className="job--location--fieldset">
          <label>New York</label>
          <Link className="link--location" to="/newYorkLocation">
            <input type="checkbox" onClick={toggleInput}/>
          </Link>
        </fieldset>
        <fieldset className="job--location--fieldset">
          <label>Berlin</label>
          <Link className="link--location" to="/berlin">
            <input type="checkbox" onClick={toggleInput} /></Link>
        </fieldset>
      </form>
    </div>

  )
}

export default FilteredLocation
