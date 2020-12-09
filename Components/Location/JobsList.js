import React, {useContext} from 'react';
import {Context} from '../../GlobalContextProvider';
import {StyledContainer} from '../../styles';
import Jobs from '../../Pages/Jobs';
import JobLoading from '../JobLoading';
import JobLocation from '../../Components/Location/JobLocation';
import JobType from '../JobType';
// Mapped the jobs data from the API url
function JobsList() {
  const {state, dispatch} = useContext(Context);
  const {loading, jobs} = state;

  // This will toggle the items
  function toggleItems() {
    dispatch({type:"TOGGLE_ITEMS"})
  }

  return (
    <StyledContainer>
        <ul>
          <JobLoading />
          {!loading && jobs && jobs && (
            <>
              {
                jobs.map(job => (<Jobs key={job.id} job={job} toggleItems={toggleItems}/>))
              }
            </>
          )
        }
      </ul>
    </StyledContainer>
  )
}

export default JobsList;
