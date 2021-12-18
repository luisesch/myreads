import React from "react";
import { Link } from "react-router-dom";

function EmptyShelf() {
  return (
    <p>
      Shelf is currently empty. To add books go to{" "}
      <Link to="/search">Search</Link>.
    </p>
  );
}

export default EmptyShelf;
