
import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {Link,useParams} from 'react-router-dom';
import {Context} from '../GlobalContextProvider';

// These are the url that I am going to fetch
const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/';
const MARKDOWN = '?markdown=true';

// Fetch and display the job data from Job's id
function JobDetails() {
  const {jobId}= useParams();
  const {state, dispatch}= useContext(Context);
  const {jobDetails, loading} = state;
  // const [jobDetail, setJobDetail] = useState({})

  // Fetch the job details
  async function getJobDetail() {
    const fetchJobDetail= await axios(BASE_URL+`${jobId}.json`+MARKDOWN);

    // Dispatch the data
    dispatch({type:"FETCH_JOB_DETAILS_DATA", details: fetchJobDetail.data})
  }

  useEffect(() => {
    setTimeout(() => {
      getJobDetail();
    }, 500)
  }, []);

  return (
    <article className="App--container">
      <div>
        <Link to="/">← Go back to seach</Link>
        <h3>How to apply</h3>
        <p>{jobDetails.how_to_apply}</p>
      </div>
      <div>
        <div>
          <h3>{jobDetails.title}</h3>
          <h4 className="job--type">{jobDetails.type}</h4>
          <p>{jobDetails.created_at}</p>
        </div>
        <div className="job--wrapper">
          <img src={jobDetails.company_logo}/>
          <h3>{jobDetails.company}</h3>
          <p>{jobDetails.location}</p>
        </div>
        <p>{jobDetails.description}</p>
      </div>
    </article>
  )
}

export default JobDetails
