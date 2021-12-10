import React, { Component } from "react";
import PropTypes from "prop-types";

class ShowBook extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
  };

  render() {
    const { book } = this.props;

    return (
      <div className="container-img">
        <img
          alt={`Book cover for ${book.title}`}
          className="gallery-img"
          src={book.imageLinks.thumbnail}
        />
      </div>
    );
  }
}

export default ShowBook;
