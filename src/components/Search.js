import React from "react";
import PropTypes from "prop-types";

const Search = ({ getNews }) => {
  const handleChange = e => {
    getNews(e.target.value);
  };

  return (
    <div className="buscador row">
      <div className="col s12">
        <form>
          <h5 className="center-align">Search by category</h5>
          <div className="input-field col s12 m6 offset-m3">
            <select onChange={handleChange}>
              <option value={"general"}>General</option>
              <option value={"business"}>Business</option>
              <option value={"entertainment"}>Entertainment</option>
              <option value={"health"}>Health</option>
              <option value={"science"}>Science</option>
              <option value={"sports"}>Sports</option>
              <option value={"technology"}>Technology</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

Search.propTypes = {
  getNews: PropTypes.func.isRequired
};

export default Search;
