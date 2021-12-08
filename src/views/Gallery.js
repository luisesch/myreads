import React, { Component } from "react";
import PropTypes from "prop-types";

import ListBooks from "./ListBooks";

class Gallery extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  };

  render() {
    const { books } = this.props;
    return (
      <div>
        <ListBooks books={books} header="Currently reading" />
        <ListBooks books={books} header="Want to read" />
        <ListBooks books={books} header="Read" />
      </div>
    );
  }
}

export default Gallery;
