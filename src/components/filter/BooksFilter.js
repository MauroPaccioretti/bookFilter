import "./BooksFilter.css";
import { useState } from "react";

const BooksFilter = ({ onFilterChanged, yearSetted }) => {
  const [year, setYear] = useState(yearSetted);

  const onYearChangeHandler = (e) => {
    onFilterChanged(e.target.value);
    setYear(e.target.value);
  };
  return (
    <div className="Books-filter">
      <div className="Books-filter__control">
        <label>Filter by year</label>
        <select value={year} onChange={onYearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default BooksFilter;
