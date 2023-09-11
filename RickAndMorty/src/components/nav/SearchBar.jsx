/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = ({ target }) => {
    setId(target.value);
  };

  return (
    <div className="container-search">
      <input onChange={handleChange} type="search" value={id}/>
      <button onClick={()=>{onSearch(id); setId('')}}>Agregar</button>
    </div>
  );
}

