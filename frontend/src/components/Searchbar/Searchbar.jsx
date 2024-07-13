import React, { useState } from "react";
import "./searchbar.css";

const types = ["Buy", "Rent"];

function Searchbar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    min: 0,
    max: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchbar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>

      <form>
        <input type="text" name="location" placeholder="Loacation" />
        <input
          type="number"
          name="min"
          placeholder="Min Price"
          min={0}
          max={10000000}
        />
        <input
          type="number"
          name="max"
          placeholder="Max Price"
          min={0}
          max={10000000}
        />
        <button>
          <a href="/">Search</a>
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
