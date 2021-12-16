import React, { Component } from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "../utils/BooksAPI";

import ListBooks from "./ListBooks";

class SearchBook extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
    onSearchBooks: PropTypes.func.isRequired,
  };

  state = {
    query: "",
  };

  updateQuery = (query) => {
    this.setState(() => ({
      query: query,
    }));
    this.props.onSearchBooks(query);
  };

  clearQuery = () => this.updateQuery("");

  render() {
    const { books, onChangeShelf } = this.props;

    return (
      <div>
        <input
          type="text"
          placeholder="Search books"
          value={this.state.query}
          onChange={(event) => this.updateQuery(event.target.value)}
          className="input-search"
        />
        {/* {this.filteredBooks.length !== books.length && (
          <div>
            <span>
              Now showing {filteredBooks.length} of {books.length}
            </span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )} */}
        {<ListBooks books={books} onChangeShelf={onChangeShelf} />}
      </div>
    );
  }
}

export default SearchBook;
