/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import SearchBar from "./SearchBar";
import styles from "./Nav.css";
import { Link, NavLink } from "react-router-dom";

export default function Nav({ onSearch, logout }) {
  return (
    <nav className="nav-searchbar">
      <SearchBar onSearch={onSearch} logout={logout}/>
      <NavLink to={"/about"} className="links">
        About
      </NavLink>
      <NavLink to={"/home"} className="links">
        Home
      </NavLink>
      <NavLink to={"/favorites"} className="links">
        Favorites
      </NavLink>
    </nav>
  );
}
