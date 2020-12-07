import {useReducer, useEffect} from 'react';
import axios from 'axios';
const endpoint = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=code';

function useReduce() {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
       case "FETCH_JOBS": {
         return {...state, loading: false, jobs: action.job}
       }
       case "FIELTER_LOCATION": {
         return {...state, loading: false, jobs: action.location}
       }
       default:
          return state
     }
   }, {
    loading: true,
    isCheked: false,
    jobs: [],
  })

  // Fetch the jobs data
  async function getJobs() {
    const fetchJobs = await axios(endpoint);
    dispatch({type:"FETCH_JOBS", job: fetchJobs.data})
  }

  // This dispatched the type of fetch jobs
   useEffect(() => {
     setTimeout(() => {
       dispatch({type:"FETCH_JOBS"})
       getJobs()
     }, 500)
   }, [])

   // return the state and dispatch that I am going to use
  return {state, dispatch}
}



export default useReduce
