/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./detail.css";

export const Detail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <>
      {character ? (
        <div className="w-[350px] card mx-auto relative top-[150px]">
          <div className="card-front">
            <img src={character.image} alt={character.name} className="card-image " />
          </div>
          <div className=" card-back">
            <div className="card-info">
              <h2 className="card-info-text">Name: {character.name}</h2>
              <hr />
              <h2 className="card-info-text">Status: {character.status}</h2>
              <hr />
              <h2 className="card-info-text">Species: {character.species}</h2>
              <hr />
              <h2 className="card-info-text">Gender: {character.gender}</h2>
              <hr />
              <h2 className="card-info-text">
                Origin:{character.origin ? character.origin.name : null}
              </h2>
            </div>
            <div className=""></div>
          </div>
        </div>
      ) : null}
    </>
  );
};
