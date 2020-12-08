import React from 'react'
import {Link} from 'react-router-dom';

function Jobs({job}) {
  const dateStr = job.created_at;
  const date = new Date(dateStr);
  const days = date.getDay() + 1;

  return (
    <Link to={`/${job.id}`}>
      <li className="items">
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
  )
}

export default Jobs
