import { useState } from "react";

import "./BookItem.css";

import BookCard from "../ui/BookCard";
import ReadDate from "./ReadDate";

const BookItems = ({ author, title, dateRead, pageCount }) => {
  // const [newTitle, setNewTitle] = useState(title);

  // const clickHandler = () => {
  //   console.log("clicked!");
  //   setNewTitle("Actualzado!");
  // };

  return (
    <BookCard className="book-item-container">
      <h2>{title}</h2>
      <h3>{author}</h3>
      <ReadDate dateRead={dateRead} />
      <p>{pageCount} páginas</p>
      {/* <button onClick={clickHandler}>Clickeame!</button> */}
    </BookCard>
  );
};

export default BookItems;
