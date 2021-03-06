import React, { Component } from "react";
import PropTypes from "prop-types";

import ShowBook from "./ShowBook";

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
  };

  render() {
    const { books, onChangeShelf } = this.props;

    return (
      <div className="gallery-container">
        <div className="gallery-row">
          {books.map((book) => (
            <div key={book.id} className="gallery-item">
              <ShowBook key={book.id} book={book} />
              <select
                onChange={(event) => onChangeShelf(book, event.target.value)}
                className="select select-shelf"
                value={book.shelf}
              >
                <option value="None">None</option>
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
