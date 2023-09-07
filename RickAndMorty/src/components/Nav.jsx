/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import SearchBar from './SearchBar'
import styles from './Nav.css'

export default function Nav({onSearch}){
  return (
    <nav className="nav-searchbar">
    <SearchBar onSearch={onSearch}/>
    </nav>
  );
}
