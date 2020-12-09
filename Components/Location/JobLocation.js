import React, {useState, useEffect,useContext} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Context} from '../../GlobalContextProvider';

const LONDON_API ='https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=london';
const NY_API = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=new+york';
const AMESTERDAM_API = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=amsterdam';
const BERLIN_API = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=berlin';

// This will filter the location
function FilteredLocation() {
  const {state, dispatch } = useContext(Context);
  const [londonLocation, setLondonLocation] = useState('');
  const [NYLocation, setNYLocation] = useState('');
  const [AmesterdamLocation, setAmesterdamLocation] = useState('');
  const [BerlinLocation, setBerlinLocation] = useState('');
  const {loading, jobs} = state;

  //Get Job data fron London
  async function getLondLocation(){
    const response = await axios(LONDON_API);
    setLondonLocation(response.data);
  }

  useEffect(() => {
    setTimeout(() => {
      getLondLocation()
    }, 500)
  }, [])

  // Get job data from Amesterdam
  async function getAmesterdamLocation(){
    const res = await axios(AMESTERDAM_API);
    setAmesterdamLocation(res.dat)
  }

  useEffect(() => {
    setTimeout(() => {
      getAmesterdamLocation();
    }, 500)
  }, [])

  // Get job data from New York
  async function getNYLocation(){
    const res = await axios(NY_API);
    setNYLocation(res.data)
  }

  useEffect(() => {
    setTimeout(() => {
      getNYLocation()
    }, 500)
  }, [])

  // Get job data from Berlin
  async function getBerlinLocation(){
    const res = await axios(BERLIN_API);
    setBerlinLocation(res.data)
  }

  useEffect(() => {
    setTimeout(() => {
      getBerlinLocation()
    }, 500)
  }, [])

  // Get the location from London
  const locationObj = !loading && londonLocation;
  const getLocation = !loading && locationObj && locationObj.map(loc => loc.location)
  const location = !loading && getLocation && getLocation[0];

  // get the location from Amesterdam
  const AmestLocationObj = !loading && AmesterdamLocation.data;
  const getAmestLocation = !loading && AmestLocationObj && AmestLocationObj.map(loc => loc.location)
  console.log(getAmestLocation);
  const Amestlocation = !loading && getAmestLocation && getAmestLocation[0 , 1];

  // get the location from New York
  const NYLocationObj = !loading && NYLocation;
  const jobInNYLocation = !loading && NYLocationObj && NYLocationObj.map(loc => loc.location)
  console.log(jobInNYLocation);
  // const NYlocation = !loading && getNYLocation && getNYLocation[0 , 1];

  // Search the job location
  function handleSearchLocation(e) {
    e.preventDefault();
  // This filter the Job title and company name
    const searchJobByLocation = !loading && jobs && jobs.filter(job => job.location.toLowerCase() === location.toLocaleLowerCase());

    // Dispatch the state
    dispatch({ type: 'SEARCH_JOB_BY_LOCATION', searchJobByLocation });
    alert(`There are ${searchJobByLocation.length}  jobs in there`);
    setLondonLocation('')
  }

  function searchAMestLocation(e) {
    e.preventDefault();
  // This filter the Job title and company name
    const searchJobInAmest = !loading && jobs && jobs.filter(job => job.location.toLowerCase() === Amestlocation.toLocaleLowerCase());

    // Dispatch the state
    dispatch({ type: 'SEARCH_JOB_IN_AMESTERDAM', searchJobInAmest });
    alert(`There are ${searchJobInAmest.length}  jobs in there`);
    setAmesterdamLocation('')
  }

  function searchNYLocation(e) {
    e.preventDefault();
  // This filter the Job title and company name
    const searchJobInNY = !loading && jobs && jobs.filter(job => job.location.toLowerCase() === Amestlocation.toLocaleLowerCase());

    // Dispatch the state
    dispatch({ type: 'SEARCH_JOB_IN_NY', searchJobInNY });
    alert(`There are ${searchJobInNY.length}  jobs in there`);
    setNYLocation('')
  }

  // function handleSearchLocation(e) {
  //   e.preventDefault();
  // // This filter the Job title and company name
  //   const searchJobByLocation = !loading && jobs && jobs.filter(job => job.location.toLowerCase() === location.toLocaleLowerCase());

  //   // Dispatch the state
  //   dispatch({ type: 'SEARCH_JOB_BY_LOCATION', searchJobByLocation });
  //   alert(`There are ${searchJobByLocation.length}  jobs in there`);
  //   setLondonLocation('')
  // }
  // function handleSearchLocation(e) {
  //   e.preventDefault();
  // // This filter the Job title and company name
  //   const searchJobByLocation = !loading && jobs && jobs.filter(job => job.location.toLowerCase() === location.toLocaleLowerCase());

  //   // Dispatch the state
  //   dispatch({ type: 'SEARCH_JOB_BY_LOCATION', searchJobByLocation });
  //   alert(`There are ${searchJobByLocation.length}  jobs in there`);
  //   setLondonLocation('')
  // }



  // This will toggle the checkbox
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
        {/* <fieldset className="job--location--fieldset">
          <label>London</label>
          <Link className="link--location" to="/londonLocation">
            <input type="checkbox" value={searchLocation} onChange={toggleInput}/>
          </Link> */}
        {/* </fieldset> */}
        <fieldset className="job--location--fieldset">
          <label>London</label>
            <input type="checkbox" onChange={handleSearchLocation}/>
        </fieldset>
        <fieldset className="job--location--fieldset">
          <label>Amsterdam</label>
          <Link className="link--location" to="/amsterdam">
            <input type="checkbox" onChange={searchAMestLocation} />
          </Link>
        </fieldset>
        <fieldset className="job--location--fieldset">
          <label>New York</label>
          <Link className="link--location" to="/newYorkLocation">
            <input type="checkbox" onClick={searchNYLocation}/>
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
