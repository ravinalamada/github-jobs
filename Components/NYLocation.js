import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {Context} from '../GlobalContextProvider';
import {Link} from 'react-router-dom';
const endpoint ='https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=new+york';

function NYLocation() {
  const {state} = useContext(Context);
  const [newYJob, setNewYJob] = useState([]);
  const {loading} = state;

  async function getNYLovation(){
    const res = await axios(endpoint);
    setNewYJob(res.data);
  }

  useEffect(() => {
     getNYLovation();
  }, [])

  console.log(newYJob);

  // const dateStr = job.created_at;
  // const date = new Date(dateStr);
  // const days = date.getDay() + 1;

  return (
    <>
      {!loading && newYJob.map(job => (
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
            {/* <p className="createdDate">{days} {days > 1 ? 'days' : 'day'} ago</p> */}
          </div>
        </li>
      ))
      }
    </>
  )
}

export default NYLocation
