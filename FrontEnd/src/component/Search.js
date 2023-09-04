import React from "react";
import { div, Form } from "react-bootstrap";
import { useState } from "react";
const Search = ({ history }) => {
  const [keyword, setKeyword] = useState([]);

  const searchHandler = (e) => {
    e.preventDefault();

    if (keyword) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  return (
    <form onSubmit={searchHandler}>
      <div className="input-group">
        <input
          type="text"
          id="search-input"
          className="form-control"
          placeholder="Search for Courses"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <div className="input-group-append">
          <button id="search_btn" className="btn-secondary">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};
export default Search;
