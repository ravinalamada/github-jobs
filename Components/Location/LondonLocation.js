import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {Context} from '../../GlobalContextProvider';
import {Link} from 'react-router-dom';
const endpoint ='https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=london';

// Fetch and display the job data from London
function London() {
  const {state, dispatch} = useContext(Context);
  const {jobs,loading} = state;

  // Fetch job data from London
  async function getNYLocation(){
    const response = await axios(endpoint);
  // Dispatch the response
    dispatch({type:"FETCH_LONDON_LOCATION_DATA", response: response.data})
  }

  useEffect(() => {
    setTimeout(() => {
      getNYLocation()
    }, 500)
  }, [])

  // Set the date when the job is created
  const dateObj =  !loading && jobs.find(job => job.created_at);
  const dateStr = dateObj.created_at
  const date = new Date(dateStr);
  const days = date.getDay() + 1;

  return (
    <>
      {!loading && jobs && jobs.map(job => (
        <Link to={`/${job.id}`}>
          <li className="items" key={job.id}>
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

export default London
