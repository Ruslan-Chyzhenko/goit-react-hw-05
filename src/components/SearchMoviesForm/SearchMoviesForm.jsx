import React, { useState } from "react";
import css from "./SearchMoviesForm.module.css";

const SearchMoviesForm = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim() === "") return;
    onSearch(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={css.input}
        placeholder="Search movies..."
      />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
};

export default SearchMoviesForm;
