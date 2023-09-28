/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import SearchBar from "./SearchBar";
import { Link, NavLink } from "react-router-dom";


export default function Nav({ onSearch, logout }) {
  return (
    <nav className=" bg-gradient-to-tr from-slate-800 to-slate-900 flex fixed w-[100vw] h-[7%] content-center items-center justify-between shadow-xl top-[0px] z-50">
      <SearchBar onSearch={onSearch} logout={logout} />

      <div className="h-[100%] flex w-[300px] justify-between">
        <NavLink
          to={"/about"}
          className="text-slate-200 h-[100%] w-[100px] pt-[11px] hover:bg-slate-700 active:bg-slate-600"
        >
          About
        </NavLink>
        <NavLink
          to={"/home"}
          className="text-slate-200 h-[100%] w-[100px] pt-[11px] hover:bg-slate-700 active:bg-slate-600"
        >
          Home
        </NavLink>
        <NavLink
          to={"/favorites"}
          className="text-slate-200 h-[100%] w-[100px] pt-[11px] hover:bg-slate-700 active:bg-slate-600"
        >
          Favorites
        </NavLink>
        <button
          onClick={logout}
          className="text-slate-200 h-[100%] w-[150px] hover:bg-slate-700 active:bg-slate-600"
        >
          <span className=" relative left-[5px]">Log Out</span>
        </button>
      </div>
    </nav>
  );
}
