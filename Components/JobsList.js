import React, {useContext} from 'react';
import {Context} from '../GlobalContextProvider';
import {StyledContainer} from '../styles';
import Jobs from '../Pages/Jobs';
import JobLoading from './JobLoading'

// Mapped the jobs data from the API url
function JobsList() {
  const {state} = useContext(Context);
  const {loading, jobs} = state

  return (
    <StyledContainer>
      <ul>
        <JobLoading />
        {!loading && jobs && (
          <>
            {
              jobs.map(job => (<Jobs key={job.id} job={job}/>))
            }
          </>
        )
        }
      </ul>
    </StyledContainer>
  )
}

export default JobsList;
