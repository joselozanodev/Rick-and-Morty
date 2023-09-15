/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  // Dentro de la copia de tu estado global, reemplaza la propiedad myFavorites por allCharacters.
  // Cuando retornes tu estado, agrega la propiedad allCharacters que también sea igual a la copia en la que agregaste el nuevo personaje.

  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
        allCharacters: [...state.allCharacters, payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== Number(payload)
        ),
      };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (char) => char.gender === payload
        ),
      };

    case ORDER:
      const allFavCopy = [...state.allCharacters];

      return {
        ...state,
        myFavorites:
          payload === "A"
            ? allFavCopy.sort((a, b) => a.id - b.id)
            : allFavCopy.sort((a, b) => b.id - a.id),
      };

    default:
      return { ...state };
  }
};

export default reducer;
