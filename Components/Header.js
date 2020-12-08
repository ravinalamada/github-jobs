import React, {useContext, useState, useEffect} from 'react';
import { HeaderStyle } from '../styles';
import {Context} from '../GlobalContextProvider';
import Jobs from '../Pages/Jobs';

// This will display the App header
function Header() {
  const {state, dispatch} = useContext(Context);
  const {loading,jobs} = state;
  const [searchJob, setSearchJob] = useState(jobs);

  // This filter the Job title and company name
    const fielterJobTitleAndCompany = !loading && jobs && searchJob.filter(job => job.title.toLowerCase() || job.company.toLowerCase() === searchJob);
    console.log(fielterJobTitleAndCompany);

    // useEffect(() => {
    //   setSearchJob(fielterJobTitleAndCompany);
    // }, [jobs]);

    function handleSearchJob(e) {
      e.preventDefault();
      dispatch({ type: 'FILTER_TITLE_COMPANY', searchJob });
      alert('Profile updated successfully');
    }

  return (
    <header className="header">
      <form className="form" onSubmit={handleSearchJob}>
        <fieldset className="form__fieldset">
          <div>
            <input
              type='text'
              className="form__input"
              name="filter"
              placeholder="Title, companies, experti..."
              value={searchJob}
              onChange={(e) => setSearchJob(e.target.value)}
            />
          </div>
          <button className="search--btn">Search</button>
        </fieldset>
      </form>
    </header>
  )
}

export default Header
