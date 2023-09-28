/* eslint-disable no-unused-labels */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
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
      addFav({id, name, status, species, gender, origin, image})
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
    <div className="w-[100%] h-[100%]">
          {
          isFav ?
            <button onClick={handleFavorite} className="float-left relative left-[8px] top-[8px] z-10 mt-[5px] hover:scale-110">❤️</button>
          :
            <button onClick={handleFavorite} className="float-left relative left-[8px] top-[8px] z-10 mt-[5px] hover:scale-110">🤍</button>
          }
          <button
            onClick={() => {onClose(id); removeFav(id)}}
            className=" float-right relative right-[8px] top-[3px] text-[20px] text-slate-200 hover:scale-110"
          >X</button>
            <h2 className="inline relative top-[125px] left-[210px] font-bold text-[30px] text-slate-300 overflow-hidden text-ellipsis" >{name}</h2>
          <Link to={`/detail/${id}`} className="relative">
            <button className="relative float-right top-[240px] right-[40px] bg-slate-500 w-[150px] h-[40px] rounded-[5px] font-semibold text-slate-200 hover:border-[3px] hover:border-slate-200 hover:bg-slate-800 active:bg-slate-500">Details</button>
          </Link>
          <img src={image} className="h-[100%] mt-[-36px] relative right-[22px] rounded-l-[9px]" />
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