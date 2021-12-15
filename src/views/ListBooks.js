import React, { Component } from "react";
import PropTypes from "prop-types";

import ShowBook from "./ShowBook";

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    header: PropTypes.string,
  };

  checkSelected = (value, shelf) => {
    return value === shelf;
  };

  render() {
    const { books, header, onChangeShelf } = this.props;

    return (
      <div className="gallery-container">
        {header !== null && <h1>{header}</h1>}
        <div className="gallery-row">
          {books.map((book, index) => (
            <div key={index} className="gallery-item">
              <ShowBook key={index} book={book} />
              <p>Current shelf: {book.shelf}</p>
              <select
                onChange={(event) => onChangeShelf(book, event.target.value)}
                className="select"
                defaultValue={book.shelf}
              >
                <option value="currentlyReading">Currently reading</option>
                <option value="wantToRead">Want to read</option>
                <option value="read">Have read</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ListBooks;
