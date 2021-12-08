import React, { Component } from "react";
import PropTypes from "prop-types";

import ListBooks from "./ListBooks";

class SearchBook extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  };

  render() {
    const { books } = this.props;
    console.log(books);

    return <ListBooks books={books} />;
  }
}

export default SearchBook;
