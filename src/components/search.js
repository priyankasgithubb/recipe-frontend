import React from "react";
import '../App.css';

function SearchBar(props) {
  const handleChange = (e) => {
    props.setDish(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a recipe <3"
        value={props.dish}
        onChange={handleChange}
      />
      <button onClick={() => props.getRecipe()}>Search</button>

      {/* Error shown only when present */}
      {props.error ? (
        <p style={{ color: 'crimson', fontSize: '0.9rem' }}>{props.error}</p>
      ) : null}
    </div>
  );
}

export default SearchBar;
