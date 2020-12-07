import React, {useContext} from 'react';
import {Context} from '../GlobalContextProvider';

// This filters jobs in New York
function FilteredNY() {
  const {state, dispatch, isCheked} = useContext(Context);
  const {jobs} = state;

  return (
    <>
     <input />
    </>
  )
}

export default FilteredNY
