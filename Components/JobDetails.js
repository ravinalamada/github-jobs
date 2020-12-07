import React, {useContext, useEffect, useState} from 'react';
import {Link,useParams} from 'react-router-dom';
import {Context} from '../GlobalContextProvider';

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/';
const MARKDOWN = '?markdown=true';

function JobDetails() {
  const {jobId}= useParams();
  const {state, dispatch}= useContext(Context);
  const {jobs, loading} = state;
  const [jobDetail, setJobDetail] = useState({})

  // Fetch the job details
  async function getJobDetail() {
    const fetchJobDetail= await fetch(BASE_URL + `${jobId}.json` + MARKDOWN);
    const res= await fetchJobDetail.json();
    setJobDetail(res)
  }

  useEffect(() => {
    getJobDetail()
  }, []);

  console.log(jobDetail);
  return (
    <article>
      <div>
        <h1>Github Jobs</h1>
        <Link to="/">← Go back to seach</Link>
        <h3>How to apply</h3>
        <p>{jobDetail.how_to_apply}</p>
      </div>
      <div>
        <h3>{jobDetail.title}</h3>
        <h4>{jobDetail.type}</h4>
        <p>{jobDetail.created_at}</p>
      </div>
      <div>
       <img src={jobDetail.company_logo}/>
       <div>
        <h3>{jobDetail.company}</h3>
        <p>{jobDetail.location}</p>
       </div>
      </div>
      <p>{jobDetail.description}</p>
    </article>
  )
}

export default JobDetails
