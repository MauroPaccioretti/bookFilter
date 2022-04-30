import { useState } from "react";

import "./BookForm.css";

const BookForm = ({ onBookDataSaved }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [readDate, setReadDate] = useState("");

  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  const changeAuthorHandler = (event) => {
    setAuthor(event.target.value);
  };

  const changePageCountHandler = (event) => {
    setPageCount(event.target.value);
  };

  const changeReadDateHandler = (event) => {
    setReadDate(event.target.value);
  };

  const clearForm = () => {
    setTitle("");
    setAuthor("");
    setPageCount("");
    setReadDate("");
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const bookData = {
      title,
      author,
      pageCount,
      dateRead: new Date(readDate),
    };
    onBookDataSaved(bookData);
    clearForm();
  };

  const [showForm, setShowForm] = useState(false);
  const showFormHandler = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };

  return showForm ? (
    <form onSubmit={submitHandler}>
      <div className="new-book-controls">
        <div className="new-book-control">
          <label>Título</label>
          <input value={title} onChange={changeTitleHandler} type="text" />
        </div>
        <div className="new-book-control">
          <label>Autor</label>
          <input value={author} onChange={changeAuthorHandler} type="text" />
        </div>
        <div className="new-book-control">
          <label>Páginas</label>
          <input
            value={pageCount}
            onChange={changePageCountHandler}
            type="number"
            min="1"
            step="1"
          />
        </div>
        <div className="new-book-control">
          <label>¿Cuándo terminaste de leerlo?</label>
          <input
            value={readDate}
            onChange={changeReadDateHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-book-actions">
        <button type="submit">Agregar lectura</button>
        <button type="reset" onClick={clearForm}>
          Limpiar formulario
        </button>
        <button type="button" onClick={showFormHandler}>
          Cancelar
        </button>
      </div>
    </form>
  ) : (
    <button onClick={showFormHandler}>Agregar Libro</button>
  );
};

export default BookForm;
