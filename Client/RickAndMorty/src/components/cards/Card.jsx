/* eslint-disable no-unused-labels */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import styles from "./card.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import  { connect }  from "react-redux";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  removeFav,
  addFav,
  allCharacters
}) {
  
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id)
    } else {
      setIsFav(true);
      addFav({id, name, status, species, gender, origin, image, onClose})
    }
  };

  useEffect(() => {
    allCharacters.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [allCharacters]);
 

  return (
    <>
      <div className="card border border-1">
        <div className="card-body p-0">
          {
          isFav ?
            <button onClick={handleFavorite}>❤️</button>
          :
            <button onClick={handleFavorite}>🤍</button>
          }
          <CloseButton
            onClick={() => {onClose(id); removeFav(id)}}
            className="btn-close btn-close"
          />
          <Link to={`/detail/${id}`}>
            <h2 className="card-name">{name}</h2>
          </Link>
          <h4 className="card-text text-start">{status}</h4>
          <h4 className="card-text text-start">{species}</h4>
          <h4 className="card-text text-start">{gender}</h4>
          <h4 className="card-text text-start">{origin}</h4>
          <img src={image} className="charImage w-100" />
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps= (dispatch)=>{
  return{
  removeFav: (id)=>{
    dispatch(removeFav(id))
  },
  addFav: (character)=>{
    dispatch(addFav(character))
  }
 }
}

const mapStateToProps = (state)=>{
    return{
      allCharacters: state.allCharacters
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);