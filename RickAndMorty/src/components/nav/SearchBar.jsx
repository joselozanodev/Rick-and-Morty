/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./searchBar.css"

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = ({ target }) => {
    setId(target.value);
  };

  return (
    <div className="container-search">
      <input onChange={handleChange} type="search" value={id} id="input-search"/>
      <button onClick={()=>{onSearch(id); setId('')}} id="btn-search">Agregar</button>
    </div>
  );
}

