/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./searchBar.css";

export default function SearchBar({ onSearch, logout }) {
  const [id, setId] = useState("");

  const randomChar = ()=> {onSearch(Math.floor(Math.random() * 825)); setId('')}

  const handleChange = ({ target }) => {
    setId(target.value);
  };

  return (
    <div className="container-search">
      <input
        onChange={handleChange}
        type="search"
        value={id}
        id="input-search"
      />
      <button
        onClick={() => {
          onSearch(id);
          setId("");
        }}
        id="btn-search"
      >
        Agregar
      </button>
      <button
        onClick={()=>randomChar()}
      >
        Random character
      </button>

      <button onClick={logout}>LogOut</button>
    </div>
  );
}
