import React, { Component } from "react";
import PropTypes from "prop-types";

import ListBooks from "./ListBooks";

class Gallery extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  };

  render() {
    const { books, onChangeShelf } = this.props;
    return (
      <div>
        <ListBooks
          books={books}
          header="Currently reading"
          onChangeShelf={onChangeShelf}
        />
        <ListBooks
          books={books}
          header="Want to read"
          onChangeShelf={onChangeShelf}
        />
        <ListBooks books={books} header="Read" onChangeShelf={onChangeShelf} />
      </div>
    );
  }
}

export default Gallery;
