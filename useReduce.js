import {useReducer, useEffect} from 'react';
import axios from 'axios';
const endpoint = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=code';

function useReduce() {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "FETCH_JOBS": {
        return {...state, loading: false, jobs: action.job}
      }
      case "FETCH_JOB_DETAILS_DATA": {
        return {...state, loading: false, jobDetails: action.details}
      }
      case "FILTER_JOB_TITLE_COMPANY": {
        return {...state, loading: false, jobs: action.searchJobByTitleAndCompany}
      }
      case "FETCH_LONDON_LOCATION_DATA": {
         return {...state, loading:false, jobs:action.response}
       }
      case "FETCH_AMESTERDAM_LOCATION_DATA": {
         return {...state, loading:false, jobs:action.AmesterdamRes}
       }
      case "FETCH_NY_LOCATION_DATA": {
         return {...state, loading:false, jobs:action.newYResponse}
       }
      case "FETCH_BERLIN_LOCATION_DATA": {
         return {...state, loading:false, jobs:action.berlinResponse}
       }
       case "FIELTER_LOCATION": {
         return {...state, loading: false, jobs: action.location}
       }
       case "NEW_YORK_LOCATION": {
         return {...state, loading: false, isCheked: !state.isCheked }
       }
       case "TOGGLE_ITEMS": {
         return {...state, loading: false, isCheked: !state.isCheked }
       }
       case "SEARCH_JOB_BY_LOCATION" : {
         return {...state, jobs: action.searchJobByLocation}
       }
       case "SEARCH_JOB_IN_AMESTERDAM" : {
         return {...state, jobs: action.searchJobInAmest}
       }
       default:
          return state
     }
   }, {
    loading: true,
    isCheked: false,
    jobs: [],
    jobDetails: {},
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
