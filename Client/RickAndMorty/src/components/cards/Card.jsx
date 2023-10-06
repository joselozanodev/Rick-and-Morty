/* eslint-disable no-unused-labels */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styles from "./card.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";

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
  allCharacters,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image });
    }
  };

  useEffect(() => {
    allCharacters.forEach((char) => {
      if (char.id === id) {
        setIsFav(true);
      }
    });
  }, [allCharacters]);

  return (
    <>
      <div class="group before:hover:scale-95 before:hover:h-72 before:hover:w-80  before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-300 via-slate-400 to-slate-500 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
        <div class="w-28 h-28  mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500">
          <img src={image} alt={name} className=" rounded-full" />
        </div>
        <div class="z-10  group-hover:-translate-y-10 transition-all duration-500">
          <span class="text-2xl font-semibold">{name}</span>
          <p>{status}</p>
        </div>
        <button
          className="btn-close absolute right-[18px] top-[17px]"
          onClick={() => {
            onClose(id);
            removeFav(id);
          }}
        >
          <span class="back"></span>
          <span class="front"></span>X
        </button>
        {isFav ? (
          <div className="z-10">
            <button
              className="bg-blue-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500"
              href="#"
              onClick={handleFavorite}
            >
            X  Favorites
            </button>
            <Link to={`/detail/${id}`}>
              <button className="bg-blue-700 px-4 py-1 text-slate-50 rounded-md  hover:scale-125 transition-all duration-500 hover:bg-blue-500 ml-[15px]">
                Details
              </button>
            </Link>
          </div>
        ) : (
          <div className="z-10">
            <button
              className="bg-blue-700 px-4 py-1 text-slate-50 rounded-md  hover:scale-125 transition-all duration-500 hover:bg-blue-500"
              href="#"
              onClick={handleFavorite}
            >
              Favorites
            </button>
            <Link to={`/detail/${id}`}>
              <button className="bg-blue-700 px-4 py-1 text-slate-50 rounded-md  hover:scale-125 transition-all duration-500 hover:bg-blue-500 ml-[15px]">
                Details
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
    addFav: (character) => {
      dispatch(addFav(character));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    allCharacters: state.allCharacters,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
