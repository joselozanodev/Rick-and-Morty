/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import styles from "./app.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "bootstrap";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { About } from "./components/about/About";
import { Detail } from "./components/nav/Detail";
import { Error } from "./components/errorComp/Error";
import { Form } from "./components/form/Form";
import Favorites from "./components/nav/Favorites";
import { useSelector } from "react-redux";

export default function App() {
  const [characters, setCharacters] = useState([]);

  const favorites = useSelector((state) => state.myFavorites);

  const location = useLocation();

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "joselozano.dev@gmail.com";
  const PASSWORD = "jose123";




  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  function logout(){
    setAccess(false)
    navigate("/")
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          if (!characters.some((character) => character.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("¡Este personaje ya ha sido agregado!");
          }
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

  const charactersWithFavorites = characters.map((character) => {
    const isFavorite = favorites.some((favorite) => favorite.id === character.id);
  
    return {
      ...character,
      isFavorite,
    };
  });

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav onSearch={onSearch} logout={logout}/> : null}

      <Routes>
        <Route path="/" element={<Form login={login}/>} />
        <Route
          path="/home"
          element={<Cards characters={charactersWithFavorites} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
