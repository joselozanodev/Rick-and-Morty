/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";


export default function SearchBar({ onSearch, logout }) {
  const [id, setId] = useState("");

  const randomChar = ()=> {onSearch(Math.floor(Math.random() * 825)); setId('')}

  const handleChange = ({ target }) => {
    setId(target.value);
  };

  return (
    <div className="h-[100%]">
      <input
        onChange={handleChange}
        type="search"
        value={id}
        className="h-[100%] rounded-[1px] focus:outline-slate-700"
      />
      <button
        onClick={() => {
          onSearch(id);
          setId("");
        }}
        className="text-slate-200 pl-[10px] h-[98%] w-[100px] hover:bg-slate-700 active:bg-slate-600"
      >
        Agregar
      </button>
      <button
        onClick={()=>randomChar()}
        className="text-slate-200 pl-[10px]  h-[98%] w-[200px] hover:bg-slate-700 active:bg-slate-600"
      >
        Random character
      </button>

    </div>
  );
}
