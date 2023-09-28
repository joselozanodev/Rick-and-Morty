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
      return { ...state, myFavorites: payload, allCharacters: payload };

      case REMOVE_FAV:
        return { ...state, myFavorites: payload, allCharacters: payload };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (char) => char.gender === payload
        ),
      };

    case ORDER:
      const favCopy = [...state.myFavorites];
      const orderedFavorites =
        payload === "A"
          ? favCopy.sort((a, b) => a.id - b.id)
          : favCopy.sort((a, b) => b.id - a.id);

      return {
        ...state,
        myFavorites: orderedFavorites,
      };

    default:
      return { ...state };
  }
};

export default reducer;
