/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
   {character ? 
   <div className=" flex h-[100%] w-[100%] justify-between flex-row-reverse">
      <div className="h-[100%] flex flex-col relative right-[350px] font-poppins">
       <h2 className="inline relative text-black  top-[130px] right-[-150px] my-[25px] text-[30px]  transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110  duration-300"><span className="font-semibold">Name:</span> {character.name}</h2>
       <h2 className="inline relative text-black top-[130px] my-[25px] right-[-150px] text-[30px]  transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110  duration-300"><span className="font-semibold">Status:</span> {character.status}</h2>
       <h2 className="inline relative text-black top-[130px] my-[25px]  right-[-150px] text-[30px]  transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110  duration-300"><span className="font-semibold">Species:</span> {character.species}</h2>
       <h2 className="inline relative text-black top-[130px] my-[25px]  right-[-150px] text-[30px]  transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110  duration-300"><span className="font-semibold">Gender:</span> {character.gender}</h2>     
       <h2 className="inline relative text-black top-[130px] my-[25px]  right-[-150px] text-[30px] transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110  duration-300"><span className="font-semibold">Origin:</span> {character.origin ? character.origin.name : null}</h2>
       </div>
       <div className="relative left-[30px] border-r-[5px] border-slate-800 w-[500px] h-[100vh] ml-[-30px] backdrop-blur-xl bg-black/30 ">
       <img src={character.image} alt={character.name} className="rounded-[50%] relative top-[170px] left-[90px] transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110  duration-300"/>
       </div>
   </div> :null} 
</>
  );
};
