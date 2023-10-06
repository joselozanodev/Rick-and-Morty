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

const URL = "http://localhost:3001/rickandmorty/login";

export default function App() {
  const [characters, setCharacters] = useState([]);

  const favorites = useSelector((state) => state.myFavorites);

  const location = useLocation();

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  async function login(userData) {
    try {
      const { email, password } = userData;
      const { data } = await axios(URL + `?email=${email}&password=${password}`)

      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  }

  function logout() {
    setAccess(false);
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = async (id) => {
    const repeatedCharacter = characters.filter(char => char.id === Number(id))
    try {
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
      if (data.name){
        if(!repeatedCharacter.length){
          setCharacters((oldChars)=>[...oldChars, data
          ])
        }else{
          alert('This character already exists!')
        }
      }

    } catch (error) {
      alert("There's no characters with that ID!")
    }
  };

  const onClose = (id) => {
    const filteredCharacter = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(filteredCharacter);
  };

  const charactersWithFavorites = characters.map((character) => {
    const isFavorite = favorites.some(
      (favorite) => favorite.id === character.id
    );

    return {
      ...character,
      isFavorite,
    };
  });

  return (
    <div className="App">
      {location.pathname !== "/" ? (
        <Nav onSearch={onSearch} logout={logout} />
      ) : null}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={
            <Cards characters={charactersWithFavorites} onClose={onClose} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
