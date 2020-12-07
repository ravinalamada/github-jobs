import React from 'react';
import { HeaderStyle } from '../styles';

// This will display the App header
function Header() {
  return (
    <HeaderStyle>
      <h1>Github jobs</h1>
      <form>
        <fieldset>
          <input
            type='text'
            name="filter"
          />
        </fieldset>
      </form>
    </HeaderStyle>
  )
}

export default Header
