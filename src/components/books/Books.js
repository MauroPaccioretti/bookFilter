import BooksFilter from "../filter/BooksFilter";
import BookItems from "./BookItem";
import "./Books.css";
import { useState } from "react";

const Books = ({ books }) => {
  const [year, setYear] = useState("2021");
  const filterChangeHandler = (year) => {
    setYear(year);
  };

  const filteredBooks = books
    .filter((b) => b.dateRead.getFullYear().toString() === year)
    .map((book, i) => (
      <BookItems
        key={i}
        title={book.title}
        dateRead={book.dateRead}
        author={book.author}
        pageCount={book.pageCount}
      />
    ));

  return (
    <div className="books-container">
      <BooksFilter yearSetted={year} onFilterChanged={filterChangeHandler} />
      {filteredBooks}
      {/* <BookItems
        title={books[0].title}
        dateRead={books[0].dateRead}
        author={books[0].author}
        pageCount={books[0].pageCount}
      />
      <BookItems
        title={books[1].title}
        dateRead={books[1].dateRead}
        author={books[1].author}
        pageCount={books[1].pageCount}
      />
      <BookItems
        title={books[2].title}
        dateRead={books[2].dateRead}
        author={books[2].author}
        pageCount={books[2].pageCount}
      />
      <BookItems
        title={books[3].title}
        dateRead={books[3].dateRead}
        author={books[3].author}
        pageCount={books[3].pageCount}
      /> */}
    </div>
  );
};

export default Books;
