/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import Card from "../cards/Card";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

function Favorites() {
  const allFavs = useSelector((state) => state.allCharacters);

  const favorites = useSelector((state) => state.myFavorites);

  const [aux, setAux] = useState(false);

  const [currentfilter, setCurrentFilter] = useState("ALL");

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
    <div className="">
      <div className="flex flex-row w-[200px] mt-[70px] mx-auto">
        <select className="mr-[50px] rounded-[2px] bg-slate-100" onChange={handleOrder}>
          <option value="A" className="bg-slate-100 ">
            Ascendente
          </option>
          <option value="D" className="bg-slate-100">
            Descendente
          </option>
        </select>

        <select onChange={handleFilter} className="h-[50px] rounded-[2px] bg-slate-100">
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
                <div className=" bg-gradient-to-r from-slate-800 to-gray-700 my-[50px] flex w-[70%] mx-auto justify-between rounded-[9px] shadow-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300">
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
                <div className=" bg-gradient-to-r from-slate-800 to-gray-700 my-[50px] flex w-[70%] mx-auto justify-between rounded-[9px] shadow-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300">
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
