/* eslint-disable no-unused-vars */
import styles from "./app.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "bootstrap";
import axios from 'axios'



function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    });
 }

 const onClose = (id) => {

  const filteredCharacter = characters.filter(character=> character.id !== Number(id))
  setCharacters(filteredCharacter)
 }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose}/>
    </div>
  );
}

export default App;
