import React from "react";
import PropTypes from "prop-types";
import New from "./New";

const ListNews = ({ news }) => {
  return (
    <div className="row contenedor-noticias">
      {news.map((element, index) => (
        <New key={index} element={element} />
      ))}
    </div>
  );
};

ListNews.propTypes = {
  news: PropTypes.array.isRequired
};

export default ListNews;
