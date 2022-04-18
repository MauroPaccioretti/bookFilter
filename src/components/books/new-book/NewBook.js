import "./NewBook.css";
import BookForm from "./BookForm";

const NewBook = ({ onBookAdded }) => {
  const saveBookDataHandler = (bookData) => {
    const bookDataWithId = {
      ...bookData,
      id: Math.random().toString(),
    };
    onBookAdded(bookDataWithId);
    // console.log(bookDataWithId);
  };
  return (
    <div className="new-book">
      <BookForm onBookDataSaved={saveBookDataHandler} />
    </div>
  );
};

export default NewBook;
