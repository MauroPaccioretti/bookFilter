import "./App.css";

import Books from "./components/books/Books";
import NewBook from "./components/books/new-book/NewBook";
import BooksFilter from "./components/filter/BooksFilter";
import { useState } from "react";

const App = () => {
  const books = [
    {
      title: "100 años de soledad",
      author: "Gabriel García Marquez",
      dateRead: new Date(2021, 8, 12),
      pageCount: 410,
    },
    {
      title: "Todos los fuegos el fuego",
      author: "Julio Cortazar",
      dateRead: new Date(2020, 6, 11),
      pageCount: 197,
    },
    {
      title: "Asesinato en el Orient Express",
      author: "Agatha Christie",
      dateRead: new Date(2021, 5, 9),
      pageCount: 256,
    },
    {
      title: "Las dos torres",
      author: "J.R.R Tolkien",
      dateRead: new Date(2020, 3, 22),
      pageCount: 352,
    },
  ];

  const bookAddedHandler = (bookData) => {};
  const filterChangeHandler = (year) => {
    console.log(year);
    return year;
  };
  const [year, setYear] = useState("2021");
  const setYearHandler = (algo) => {
    setYear(algo);
  };

  return (
    <div>
      <h2>Books Champion App</h2>
      <p>Leer libros</p>
      <NewBook onBookAdded={bookAddedHandler} />
      {/* <BooksFilter yearSetted={year} onFilterChanged={filterChangeHandler} /> */}
      <Books books={books} year={filterChangeHandler} filtro={setYearHandler} />
    </div>
  );
};

export default App;
