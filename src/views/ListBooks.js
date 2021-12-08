import React, { Component } from "react";
import PropTypes from "prop-types";

import ShowBook from "./ShowBook";

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    header: PropTypes.string,
  };

  render() {
    const { books, header } = this.props;

    return (
      <div className="gallery-container">
        {header !== null && <h1>{header}</h1>}
        <div className="gallery-row">
          {books.map((book, index) => (
            <ShowBook key={index} book={book} />
          ))}
        </div>
      </div>
    );
  }
}

export default ListBooks;
