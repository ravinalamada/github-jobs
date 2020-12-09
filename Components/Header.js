import React, {useContext, useState, useEffect} from 'react';
import { HeaderStyle } from '../styles';
import {Context} from '../GlobalContextProvider';
import Jobs from '../Pages/Jobs';

// This will display the App header
function Header() {
  const {state, dispatch} = useContext(Context);
  const {loading,jobs} = state;
  const [searchJob, setSearchJob] = useState('');

    function submitSearchJob(e) {
      e.preventDefault();

    // This filter the Job title and company name
      const searchJobByTitleAndCompany = !loading && jobs && jobs.filter(job => job.title.toLowerCase() === searchJob.toLocaleLowerCase() || job.company.toLowerCase() === searchJob.toLocaleLowerCase());
      console.log(searchJobByTitleAndCompany);
      dispatch({ type: 'FILTER_JOB_TITLE_COMPANY', searchJobByTitleAndCompany });
      // alert(`There are ${searchJobByTitleAndCompany.length}  jobs in there`);
      setSearchJob('')
    }

  return (
    <header className="header">
      <form className="form" onSubmit={submitSearchJob}>
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
