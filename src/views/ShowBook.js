import React, { Component } from "react";
import PropTypes from "prop-types";

class ShowBook extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
  };

  render() {
    const { book } = this.props;

    return (
      <div>
        <div className="container-img">
          <img
            alt={`Book cover for ${book.title}`}
            className="gallery-img"
            src={book.imageLinks.thumbnail}
          />
        </div>
        <p className="book-title">{book.title}</p>
        <p>
          {book.authors.map((author, index) =>
            index + 1 < book.authors.length ? author + ", " : author
          )}
        </p>
      </div>
    );
  }
}

export default ShowBook;
