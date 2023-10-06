/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import Card from "../cards/Card";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";
import styles from './favorites.css'

function Favorites() {
  const allFavs = useSelector((state) => state.allCharacters);

  const favorites = useSelector((state) => state.myFavorites);

  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  const handleOrder = ({ target }) => {
    dispatch(orderCards(target.value));
    setAux(true);
  };

  const handleFilter = ({ target }) => {
    const value = target.value;

    if (value === "ALL") {
      setAux(false);
    } else {
      dispatch(filterCards(target.value));
      setAux(true);
    }
  };

  return (
    <div className="flex flex-row flex-wrap mx-[4px] gap-[20px] mt-[150px]">
      <div className="absolute top-[70px] right-[570px] rounded-sm">
        <select className="h-[40px]" onChange={handleOrder}>
          <option value="A" className="">
            Ascendente
          </option>
          <option value="D" className="">
            Descendente
          </option>
        </select>

        <select onChange={handleFilter} className="h-[40px] ml-[10px] rounded-sm">
          <option value="ALL" className="bg-slate-100">
            All characters
          </option>
          <option value="Male" className="bg-slate-100">
            Male
          </option>
          <option value="Female" className="bg-slate-100">
            Female
          </option>
          <option value="Genderless" className="bg-slate-100">
            Genderless
          </option>
          <option value="unknown" className="bg-slate-100">
            Unknown
          </option>
        </select>
      </div>

      {aux
        ? favorites.map(
            ({ id, name, status, species, gender, origin, image }) => {
              return (
                <div className=" ">
                  <Card
                    id={id}
                    key={id}
                    name={name}
                    status={status}
                    species={species}
                    gender={gender}
                    origin={origin.name}
                    image={image}
                  />
                </div>
              );
            }
          )
        : allFavs.map(
            ({ id, name, status, species, gender, origin, image }) => {
              return (
                <div className=" ">
                  <Card
                    id={id}
                    key={id}
                    name={name}
                    status={status}
                    species={species}
                    gender={gender}
                    origin={origin.name}
                    image={image}
                  />
                </div>
              );
            }
          )}
    </div>
  );
}

export default Favorites;
