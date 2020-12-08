import React, {useContext, useEffect, useState} from 'react';
import {Link,useParams} from 'react-router-dom';
import {Context} from '../GlobalContextProvider';

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/';
const MARKDOWN = '?markdown=true';

function JobDetails() {
  const {jobId}= useParams();
  const {state}= useContext(Context);
  const {jobs, loading} = state;
  const [jobDetail, setJobDetail] = useState({})

  // Fetch the job details
  async function getJobDetail() {
    const fetchJobDetail= await fetch(BASE_URL+`${jobId}.json`+MARKDOWN);
    const res= await fetchJobDetail.json();
    setJobDetail(res)
  }

  useEffect(() => {
    getJobDetail()
  }, []);

  console.log(jobDetail);
  return (
    <article className="App--container">
      <div>
        <Link to="/">← Go back to seach</Link>
        <h3>How to apply</h3>
        <p>{jobDetail.how_to_apply}</p>
      </div>
      <div>
        <div>
          <h3>{jobDetail.title}</h3>
          <h4 className="job--type">{jobDetail.type}</h4>
          <p>{jobDetail.created_at}</p>
        </div>
        <div className="job--wrapper">
          <img src={jobDetail.company_logo}/>
          <h3>{jobDetail.company}</h3>
          <p>{jobDetail.location}</p>
        </div>
        <p>{jobDetail.description}</p>
      </div>
    </article>
  )
}

export default JobDetails
