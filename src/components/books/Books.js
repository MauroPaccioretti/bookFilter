import BooksFilter from "../filter/BooksFilter";
import BookItems from "./BookItem";
import "./Books.css";
import { useState } from "react";

const Books = ({ books }) => {
  const [selectedYear, setYear] = useState("2021");
  const filterChangeHandler = (year) => {
    setYear(year);
  };

  const filteredBooks =
    selectedYear === "all"
      ? books.map((book) => (
          <BookItems
            key={book.id}
            title={book.title}
            dateRead={book.dateRead}
            author={book.author}
            pageCount={book.pageCount}
          />
        ))
      : books
          .filter((b) => b.dateRead.getFullYear().toString() === selectedYear)
          .map((book) => (
            <BookItems
              key={book.id}
              title={book.title}
              dateRead={book.dateRead}
              author={book.author}
              pageCount={book.pageCount}
            />
          ));

  return (
    <div>
      <BooksFilter
        yearSetted={selectedYear}
        onFilterChanged={filterChangeHandler}
      />
      <div className="books-container">
        {filteredBooks.length === 0 ? (
          <p className="Books-filter">
            No hay libros leidos en el año {selectedYear}
          </p>
        ) : (
          filteredBooks
        )}
      </div>
    </div>
  );
};

export default Books;
