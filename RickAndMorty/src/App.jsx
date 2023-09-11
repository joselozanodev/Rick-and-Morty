/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import styles from "./app.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "bootstrap";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { About } from "./components/about/About";
import { Detail } from "./components/nav/Detail";
import { Error } from "./components/errorComp/Error";
import { Form } from "./components/form/Form";
import { useLocation, useNavigate } from "react-router-dom";

export default function App() {
  const [characters, setCharacters] = useState([]);

  const location = useLocation();

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "joselozano.dev@gmail.com";
  const PASSWORD = "jose123";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }
  }

  useEffect(()=>{
    !access && navigate('/')
  },[access])

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    const filteredCharacter = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(filteredCharacter);
  };

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : null}

      <Routes>
        <Route path="/" element={<Form login={login}/>} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
