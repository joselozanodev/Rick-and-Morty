/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import SearchBar from "./SearchBar";
import styles from "./Nav.css";
import { Link, NavLink } from "react-router-dom";

export default function Nav({ onSearch }) {
  return (
    <nav className="nav-searchbar">
      <SearchBar onSearch={onSearch} />
      <NavLink to={"/about"} className="about">
        About
      </NavLink>
      <NavLink to={"/home"} className="home">
        Home
      </NavLink>
    </nav>
  );
}
