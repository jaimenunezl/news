import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper grey darken-4">
          <span className="brand-logo center white-text">{title}</span>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
