import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {Context} from '../../GlobalContextProvider';
import {Link} from 'react-router-dom';
const endpoint ='https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=amsterdam';

// Fetch and display the job data from Amesterdam
function AmesterdamLocation() {
  const {state, dispatch} = useContext(Context);
  const {jobs,loading} = state;

  // Get job data from Amesterdam
  async function getAmesterdamLocation(){
    const res = await axios(endpoint);

  // Dispatch the res
    dispatch({type:"FETCH_AMESTERDAM_LOCATION_DATA", AmesterdamRes: res.data})
  }

  useEffect(() => {
    setTimeout(() => {
      getAmesterdamLocation();
    }, 500)
  }, [])

  // Set the date when the job is created
  const dateObj =  !loading && jobs.find(job => job.created_at);
  const dateStr = dateObj.created_at
  const date = new Date(dateStr);
  const days = date.getDay() + 1;

  // This will toggle the items
  function toggleItems() {
    dispatch({type:"TOGGLE_ITEMS"})
  }

  return (
    <>
      {!loading && jobs && jobs.map(job => (
        <Link to={`/${job.id}`}>
          <li className="items" key={job.id} onClick={toggleItems}>
          <div className="job--contents">
            <img src={job.company_logo} alt={job.title}/>
            <div>
              <p className="job--company">{job.company}</p>
              <h3>{job.title}</h3>
              <p className="job--type">{job.type}</p>
            </div>
          </div>
          <div className="job--location--days">
            <p className="location">{job.location}</p>
            <p className="createdDate">{days} {days > 1 ? 'days' : 'day'} ago</p>
          </div>
        </li>
        </Link>
      ))
      }
    </>
  )
}

export default AmesterdamLocation
