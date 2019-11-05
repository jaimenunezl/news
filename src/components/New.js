import React from "react";
import PropTypes from "prop-types";

const New = ({ element }) => {
  const { title, url, description, urlToImage } = element;

  const image = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt="title" />
    </div>
  ) : null;

  return (
    <div className="col s12 m6 l4">
      <div className="card blue-grey darken-1">
        {image}
        <div className="card-content white-text">
          <span className="card-title">{title}</span>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Ver noticia completa
          </a>
        </div>
      </div>
    </div>
  );
};

New.propTypes = {
  element: PropTypes.object.isRequired
};

export default New;
