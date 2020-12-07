import React from 'react';
import Header from '../Components/Header';
import JobsList from '../Components/JobsList';
import {GlobalStyle} from '../styles';
import FilteredLocation from '../Components/FilteredLocation'


function App() {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <div>
        <FilteredLocation />
        <JobsList />
      </div>
    </>
  )
}

export default App
