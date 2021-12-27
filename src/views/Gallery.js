import React, { Component } from "react";
import PropTypes from "prop-types";
import * as ShelvesInfo from "../utils/ShelvesInfo";

import ListBooks from "./ListBooks";
import EmptyShelf from "./EmptyShelf";

class Gallery extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
  };

  render() {
    const { books, onChangeShelf } = this.props;

    return (
      <div>
        <h1>Your books</h1>
        {ShelvesInfo.SHELVES.map((shelf) => (
          <div key={shelf.id} className={shelf.class}>
            <h2>{shelf.title}</h2>
            {books.filter((book) => book.shelf === shelf.id).length > 0 ? (
              <ListBooks
                books={books.filter((book) => book.shelf === shelf.id)}
                onChangeShelf={onChangeShelf}
              />
            ) : (
              <EmptyShelf />
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default Gallery;
