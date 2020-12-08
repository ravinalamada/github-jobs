import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {Context} from '../GlobalContextProvider';
import {Link} from 'react-router-dom';
const endpoint ='https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=amsterdam';

function AmesterdamLocation() {
  const {state} = useContext(Context);
  const [amsterdamLocation, setAmsterdamLocation] = useState([]);
  const {loading} = state;

  async function getNYLovation(){
    const res = await axios(endpoint);
    setAmsterdamLocation(res.data);
  }

  useEffect(() => {
     getNYLovation();
  }, [])

  console.log(amsterdamLocation);

  // const dateStr = job.created_at;
  // const date = new Date(dateStr);
  // const days = date.getDay() + 1;

  return (
    <>
      {!loading && amsterdamLocation.map(job => (
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

export default AmesterdamLocation