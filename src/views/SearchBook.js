import React, { Component } from "react";
import PropTypes from "prop-types";

import ListBooks from "./ListBooks";

class SearchBook extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  };

  state = {
    query: "",
  };

  updateQuery = (query) => {
    this.setState(() => ({
      query: query,
    }));
  };

  clearQuery = () => this.updateQuery("");

  render() {
    const { query } = this.state;
    const { books, onChangeShelf } = this.props;

    const filteredBooks =
      query === ""
        ? books
        : books.filter((book) =>
            book.title.toLowerCase().includes(query.toLowerCase())
          );

    return (
      <div>
        <input
          type="text"
          placeholder="Search books"
          value={this.state.query}
          onChange={(event) => this.updateQuery(event.target.value)}
          className="input-search"
        />
        {filteredBooks.length !== books.length && (
          <div>
            <span>
              Now showing {filteredBooks.length} of {books.length}
            </span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )}
        <ListBooks books={filteredBooks} onChangeShelf={onChangeShelf} />
      </div>
    );
  }
}

export default SearchBook;
