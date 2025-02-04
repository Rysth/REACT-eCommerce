import React from 'react';
import './Search.css';

function Search() {
  return (
    <form className="form">
      <div className="form-group">
        <label htmlFor="searchBar" className="form-label search">
          <input
            className="form-input"
            type="text"
            placeholder="Find the best brands"
            name="searchBar"
            id="searchBar"
            required
          />
          <button className="form-button" type="submit">
            Search
          </button>
        </label>
      </div>
    </form>
  );
}

export default Search;
