import React from 'react';
import { HeaderStyle } from '../styles';

// This will display the App header
function Header() {
  return (
    <header className="header">
      <form className="form">
        <fieldset className="form__fieldset">
          <div>
            <input
              type='text'
              className="form__input"
              name="filter"
              placeholder="Title, companies, experti..."
            />
          </div>
          <button>Search</button>
        </fieldset>
      </form>
    </header>
  )
}

export default Header
