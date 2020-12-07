import React from 'react'

function Jobs({job}) {
  const dateStr = job.created_at;
  const date = new Date(dateStr);
  const days = date.getDay() + 1;

  return (
    <li>
      <img src={job.company_logo} alt={job.title}/>
      <div>
        <p>{job.company}</p>
        <h3>{job.title}</h3>
        <p>{job.type}</p>
      </div>
      <div>
        <p>{job.location}</p>
        <p>{days} {days > 1 ? 'days' : 'day'} ago</p>
      </div>
    </li>
  )
}

export default Jobs
